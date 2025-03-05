import styles from './Header.module.scss'

type Props = {
  heading: string,
  subHeading?: string
}

export const Header = ({heading, subHeading}: Props) => {
  return (
    <header className={styles.header}>
      <h1>{heading}</h1>
      {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
    </header>
  )
}