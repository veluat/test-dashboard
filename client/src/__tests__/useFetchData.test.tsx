import '@testing-library/jest-dom'
import {renderHook, waitFor} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import {server} from '../mocks/server'
import {http, HttpResponse} from 'msw'
import {useFetchData} from '../hooks'

describe('useFetchData', () => {
  it('should return loading state initially', () => {
    const {result} = renderHook(() => useFetchData())

    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()
    expect(result.current.tests).toEqual([])
    expect(result.current.sites).toEqual([])
  })

  it('should return data after successful fetch', async () => {
    const {result} = renderHook(() => useFetchData())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBeNull()
      expect(result.current.tests.length).toBeGreaterThan(0)
      expect(result.current.sites.length).toBeGreaterThan(0)
    })
  })

  it('should return error if fetch fails', async () => {
    server.use(
      http.get('http://localhost:3100/tests', () => {
        return new HttpResponse(null, {status: 500})
      }),
      http.get('http://localhost:3100/sites', () => {
        return new HttpResponse(null, {status: 500})
      })
    )

    const {result} = renderHook(() => useFetchData())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBe('Failed to fetch data, Error: Failed to fetch tests')
      expect(result.current.tests).toEqual([])
      expect(result.current.sites).toEqual([])
    })
  })
})