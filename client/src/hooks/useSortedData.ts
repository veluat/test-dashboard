import {useMemo} from 'react'
import {FormattedData, Status} from '../types'

export const useSortedData = (
  data: FormattedData[],
  sortConfig: { key: keyof FormattedData; direction: 'asc' | 'desc' } | null
) => {
  return useMemo(() => {
    if (!sortConfig) return data

    return [...data].sort((a, b) => {
      if (sortConfig.key === 'status') {

        const statusOrder = sortConfig.direction === 'asc'
          ? {[Status.ONLINE]: 1, [Status.PAUSED]: 2, [Status.STOPPED]: 3, [Status.DRAFT]: 4}
          : {[Status.DRAFT]: 1, [Status.STOPPED]: 2, [Status.PAUSED]: 3, [Status.ONLINE]: 4}
        return statusOrder[a.status] - statusOrder[b.status]
      } else {

        const aValue = String(a[sortConfig.key]).toLowerCase()
        const bValue = String(b[sortConfig.key]).toLowerCase()
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1
        }
        return 0
      }
    })
  }, [data, sortConfig])
}