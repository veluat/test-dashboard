import {ButtonLink} from '../buttonLink'
import styles from './NoResults.module.scss'

type Props = {
  handleReset: () => void;
}
export const NoResults = ({handleReset}: Props) => {
  return (
    <div className={styles.noResults}>
      <h2>Your search did not match any results</h2>
      <ButtonLink
        text='Reset'
        onClick={handleReset}
      />
    </div>
  )
}