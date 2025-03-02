import {Link} from 'react-router-dom'
import styles from './TextLink.module.scss'
import {BackArrowIcon} from '../../assets'

type Props = {
  to: string
  text: string
}

export const TextLink = ({to, text}: Props) => {
  return (
    <Link to={to} className={styles.root}>
      <BackArrowIcon/>
      {text}
    </Link>
  )
}