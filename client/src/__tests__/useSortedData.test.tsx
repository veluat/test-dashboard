import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import {FormattedData, Status, Type} from '../types'
import {useSortedData} from '../hooks'

describe('useSortedData', () => {
  it('should return sorted data in ascending order', () => {
    const data: FormattedData[] = [
      {
        id: 1,
        name: 'Test B',
        type: Type.CLASSIC,
        status: Status.PAUSED,
        siteId: 1,
        siteUrl: 'site1.com'
      },
      {
        id: 2,
        name: 'Test A',
        type: Type.MVT,
        status: Status.DRAFT,
        siteId: 2,
        siteUrl: 'site2.com'
      },
    ]

    const {result} = renderHook(() => useSortedData(data, {key: 'name', direction: 'asc'}))

    expect(result.current[0].name).toBe('Test A')
    expect(result.current[1].name).toBe('Test B')
  })

  it('should return sorted data in descending order', () => {
    const data: FormattedData[] = [
      {
        id: 1,
        name: 'Test B',
        type: Type.CLASSIC,
        status: Status.PAUSED,
        siteId: 1,
        siteUrl: 'site1.com'
      },
      {
        id: 2,
        name: 'Test A',
        type: Type.MVT,
        status: Status.DRAFT,
        siteId: 2,
        siteUrl: 'site2.com'
      },
    ]

    const {result} = renderHook(() => useSortedData(data, {key: 'name', direction: 'desc'}))

    expect(result.current[0].name).toBe('Test B')
    expect(result.current[1].name).toBe('Test A')
  })
})