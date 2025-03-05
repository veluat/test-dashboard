import {useState} from 'react'
import {FormattedData} from '../../types'
import {ChevronIcon} from '../../assets'
import styles from './TableHeader.module.scss'

type Props = {
  handleSort: (key: keyof FormattedData) => void;
};

export const TableHeader = ({handleSort}: Props) => {

  const [isTypeSorted, setIsTypeSorted] = useState(false)

  const handleTypeSort = () => {
    setIsTypeSorted((prev) => !prev)
    handleSort('type')
  }

  return (
    <thead className={styles.root}>
    <tr>
      <td>
        <p onClick={() => handleSort('name')}>Name</p>
      </td>
      <td className={styles.chevron}>
        <p onClick={handleTypeSort}>Type</p>
        <ChevronIcon className={isTypeSorted ? styles.rotated : ''}/>
      </td>
      <td>
        <p onClick={() => handleSort('status')}>Status</p>
      </td>
      <td>
        <p onClick={() => handleSort('siteUrl')}>Site</p>
      </td>
      <td></td>
    </tr>
    </thead>
  )
}