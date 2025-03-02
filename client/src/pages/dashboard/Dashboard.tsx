import React, {useState} from 'react'
import {useFetchData, useSortedData} from '../../hooks'
import {FormattedData} from '../../types'
import {Header} from '../../cmponents/header'
import {Input} from '../../cmponents/input'
import {Table} from '../../cmponents/table'
import {ButtonLink} from '../../cmponents/buttonLink'
import styles from './Dashboard.module.scss'

export const Dashboard = () => {
  const {tests, sites, loading, error} = useFetchData()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortConfig, setSortConfig] = useState<{ key: keyof FormattedData; direction: 'asc' | 'desc' } | null>(null)

  const formattedData: FormattedData[] = tests.map((test) => {
    const site = sites.find((s) => s.id === test.siteId)
    return {
      id: test.id,
      name: test.name,
      type: test.type,
      status: test.status,
      siteId: test.siteId,
      siteUrl: site ? site.url.replace(/^https?:\/\/(www\.)?/, '') : '',
    }
  })

  const filteredData = formattedData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedData = useSortedData(filteredData, sortConfig)

  const handleSort = (key: keyof FormattedData) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig && sortConfig.key === key) {

      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc'
    }
    setSortConfig({key, direction})
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleReset = () => {
    setSearchQuery('')
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className={styles.dashboard}>
      <Header heading='Dashboard'/>
      <Input
        value={searchQuery}
        handleSearch={handleSearch}
        resultsNum={filteredData.length}
      />
      {filteredData.length > 0 ? (
        <Table data={sortedData} handleSort={handleSort}/>
      ) : (
        <div className={styles.noResults}>
          <h2>Your search did not match any results</h2>
          <ButtonLink
            text='Reset'
            onClick={handleReset}
          />
        </div>
      )}
    </div>
  )
}