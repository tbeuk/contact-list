import React from 'react'
import { NavLink } from 'react-router-dom'

import { AddIcon } from '../Icons/AddIcon'
import { ContactItem } from '../ContactItem'

import styles from './contacts-list.module.css'

function ContactsList() {
  return (
    <div className={styles.contactsContainer}>
      <NavLink to="/contact-new" className={styles.addContactBtn}>
        <AddIcon fillColor="#8ACCD1" />
        <p>Add New</p>
      </NavLink>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  )
}

export { ContactsList }