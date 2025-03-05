import '@testing-library/jest-dom'
import {describe, expect, it} from 'vitest'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {Dashboard} from '../pages/dashboard'
import {server} from '../mocks/server'
import {http, HttpResponse} from 'msw'

describe('Dashboard', () => {
  it('renders loading state initially', () => {
    render(
      <MemoryRouter>
        <Dashboard/>
      </MemoryRouter>
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders data correctly after loading', async () => {
    render(
      <MemoryRouter>
        <Dashboard/>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Prototype of the new map')).toBeInTheDocument()
      expect(screen.getByText('Dark theme test')).toBeInTheDocument()
    })
  })

  it('filters data based on search query', async () => {
    render(
      <MemoryRouter>
        <Dashboard/>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Prototype of the new map')).toBeInTheDocument()
    })

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {value: 'Dark theme'}})

    expect(screen.getByText('Dark theme test')).toBeInTheDocument()
    expect(screen.queryByText('Prototype of the new map')).not.toBeInTheDocument()
  })

  it('sorts data correctly', async () => {
    render(
      <MemoryRouter>
        <Dashboard/>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Prototype of the new map')).toBeInTheDocument()
    })

    const sortButton = screen.getByText('Name')
    fireEvent.click(sortButton)

    const rows = screen.getAllByRole('row')
    expect(rows[1]).toHaveTextContent('Dark theme test')
    expect(rows[2]).toHaveTextContent('New Year\'s Sale')
  })

  it('renders error state if API request fails', async () => {
    server.use(
      http.get('http://localhost:3100/tests', () => {
        return new HttpResponse(null, {status: 500})
      })
    )

    render(
      <MemoryRouter>
        <Dashboard/>
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Error: Failed to fetch data, Error: Failed to fetch tests')).toBeInTheDocument()
    })
  })
})