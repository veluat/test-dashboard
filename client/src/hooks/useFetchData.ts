import {useEffect, useState} from 'react'
import {fetchSites, fetchTests} from '../api'
import {Site, Test} from '../types'

export const useFetchData = () => {
  const [tests, setTests] = useState<Test[]>([])
  const [sites, setSites] = useState<Site[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testsData, sitesData] = await Promise.all([fetchTests(), fetchSites()])
        setTests(testsData)
        setSites(sitesData)
      } catch (error) {
        setError(`Failed to fetch data, ${error}`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return {tests, sites, loading, error}
}