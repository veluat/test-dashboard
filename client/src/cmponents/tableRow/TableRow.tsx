import {FormattedData} from '../../types'
import {ButtonLink} from '../buttonLink'
import {Button, Type, Status} from '../../types'
import classNames from 'classnames'
import styles from './TableRow.module.scss'

type Props = {
  item: FormattedData;
  buttonType: Button;
};

export const TableRow = ({item, buttonType}: Props) => {
  const {id, name, type, status, siteUrl} = item

  const actionUrl = buttonType === Button.FINALIZE ? `/finalize/${id}` : `/results/${id}`

  const getTypeDisplay = (type: Type) => {
    switch (type) {
      case Type.CLASSIC:
        return <span className={styles.classic}>Classic</span>
      case Type.SERVER_SIDE:
        return <span className={styles.serverSide}>Server-side</span>
      case Type.MVT:
        return <span className={styles.mvt}>MVT</span>
      default:
        return type
    }
  }

  const getStatusDisplay = (status: Status) => {
    switch (status) {
      case Status.DRAFT:
        return <span className={styles.draft}>Draft</span>
      case Status.ONLINE:
        return <span className={styles.online}>Online</span>
      case Status.PAUSED:
        return <span className={styles.paused}>Paused</span>
      case Status.STOPPED:
        return <span className={styles.stopped}>Stopped</span>
      default:
        return status
    }
  }

  const trClass = classNames(styles.root, {
    [styles.pink]: siteUrl.includes('market'),
    [styles['lavender-light']]: siteUrl.includes('delivery'),
    [styles.lavender]: siteUrl.includes('games'),
  })

  return (
    <tr className={trClass} key={id}>
      <td className={`${styles.name} ${trClass} ${styles.firstCell}`}>
        {name}
      </td>
      <td className={styles.type}>
        {getTypeDisplay(type)}
      </td>
      <td className={styles.status}>
        {getStatusDisplay(status)}
      </td>
      <td className={styles.site}>
        {siteUrl}
      </td>
      <td className={styles.button}>
        <ButtonLink
          to={actionUrl}
          text={buttonType === Button.RESULTS ? 'Results' : 'Finalize'}
          color={buttonType === Button.RESULTS ? 'results' : 'finalize'}
        />
      </td>
    </tr>
  )
}