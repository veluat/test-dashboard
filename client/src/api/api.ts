import {Site, Test} from '../types'

export const fetchSites = async (): Promise<Site[]> => {
  const response = await fetch('http://localhost:3100/sites')
  if (!response.ok) throw new Error('Failed to fetch sites')
  return response.json()
}

export const fetchTests = async (): Promise<Test[]> => {
  const response = await fetch('http://localhost:3100/tests')
  if (!response.ok) throw new Error('Failed to fetch tests')
  return response.json()
}

export const fetchTestById = async (testId: string): Promise<Test> => {
  const response = await fetch(`http://localhost:3100/tests/${testId}`)
  if (!response.ok) throw new Error('Failed to fetch test')
  return response.json()
}