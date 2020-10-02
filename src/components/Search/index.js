import React from 'react'
import PropTypes from 'prop-types'

import { SearchIcon } from '../../components/Icons/SearchIcon'

import styles from './search.module.css'

function Search({ onInputChange }) {
  const handleInputChange = (event) => {
    onInputChange(event.target.value)
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchContent}>
        <SearchIcon className={styles.searchIconInput} />
        <input
          onChange={handleInputChange}
          className={styles.searchInput}
          type="text"
        />
      </div>
    </div>
  )
}

Search.defaultProps = {
  onInputChange: () => {},
}

Search.propTypes = {
  onInputChange: PropTypes.func,
}

export { Search }
