import React from 'react'
import {SearchIcon} from '../../assets'
import styles from './Input.module.scss'

type Props = {
  value: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resultsNum: number;
}

export const Input = ({handleSearch, resultsNum, value}: Props) => {
  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon}/>
      <input
        className={styles.input}
        type='text'
        placeholder='What test are you looking for?'
        onChange={handleSearch}
        value={value}
      />
      <span className={styles.counter}>{resultsNum} tests</span>
    </div>
  )
}
