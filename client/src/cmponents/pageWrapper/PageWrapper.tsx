import {ReactNode} from 'react'
import styles from './PageWrapper.module.scss'

type Props = {
  children: ReactNode;
}

export const PageWrapper = ({children}: Props) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}