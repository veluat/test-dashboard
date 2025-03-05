import {useEffect, useState} from 'react'
import {fetchTestById} from '../api'
import {Test} from '../types'

export const useTestData = (testId: string) => {
  const [test, setTest] = useState<Test | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testData = await fetchTestById(testId)
        setTest(testData)
      } catch (error) {
        setError(`Failed to fetch data, ${error}`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [testId])

  return {test, loading, error}
}