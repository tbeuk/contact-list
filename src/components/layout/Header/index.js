import React from 'react'

import { LogoIcon } from '../../Icons/LogoIcon'

import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <LogoIcon className={styles.headerLogoIcon} />
    </header>
  )
}

export { Header }
