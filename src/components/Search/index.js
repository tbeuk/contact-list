import React from 'react'

import { SearchIcon } from '../../components/Icons/SearchIcon'

import styles from './search.module.css'

function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <SearchIcon className={styles.searchIconInput} />
        <input className={styles.searchInput} type="text" />
      </div>
    </div>
  )
}

export { Search }
