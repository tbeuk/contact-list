import React from 'react'
import { NavLink } from 'react-router-dom'
import { AddIcon } from '../Icons/AddIcon'
import { ContactItem } from '../ContactItem'

import PropTypes from 'prop-types'

import styles from './contacts-list.module.css'

function ContactsList({ contacts, showAddContactBtn }) {
  return (
    <div className={styles.contactsContainer}>
      {showAddContactBtn && (
        <NavLink to="/contact-new" className={styles.addContactBtn}>
          <AddIcon fillColor="#8ACCD1" />
          <p>Add New</p>
        </NavLink>
      )}
      {contacts.map((item, index) => {
        return (
          <ContactItem
            key={`item-${index}`}
            id={item.id}
            fullName={item.fullName}
            imgSrc={item.imgSrc}
          />
        )
      })}
    </div>
  )
}

ContactsList.defaultProps = {
  contacts: [],
  showAddContactBtn: true,
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  showAddContactBtn: PropTypes.bool,
}

export { ContactsList }
