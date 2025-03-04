import {FormattedData} from '../../types'
import {ChevronIcon} from '../../assets'
import styles from './TableHeader.module.scss'

type Props = {
  handleSort: (key: keyof FormattedData) => void;
};

export const TableHeader = ({handleSort}: Props) => {
  return (
    <thead className={styles.root}>
    <tr>
      <td>
        <p onClick={() => handleSort('name')}>Name</p>
      </td>
      <td className={styles.chevron}>
        <p onClick={() => handleSort('type')}>Type</p>
        <ChevronIcon/>
      </td>
      <td>
        <p onClick={() => handleSort('status')}>Status</p>
      </td>
      <td colSpan={2}>
        <p onClick={() => handleSort('siteUrl')}>Site</p>
      </td>
    </tr>
    </thead>
  )
}