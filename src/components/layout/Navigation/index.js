import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navigation.module.css'

function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <NavLink
          exact={true}
          activeClassName={`${styles.activeNavItem}`}
          className={styles.navItem}
          to="/"
        >
          All Contacts
        </NavLink>
        <div className={styles.navItemDivider}></div>
        <NavLink
          exact={true}
          activeClassName={`${styles.activeNavItem}`}
          className={styles.navItem}
          to="/favourites"
        >
          My favorites
        </NavLink>
      </div>
      <div className={styles.navLine}></div>
    </nav>
  )
}

export { Navigation }
