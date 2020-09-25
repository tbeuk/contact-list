import React, { useState } from 'react'

import { HeartIcon } from '../Icons/HeartIcon'
import { HeartFullIcon } from '../Icons/HeartFullIcon'
import { EditIcon } from '../Icons/EditIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'

import styles from './contact-item.module.css'
import Avatar from '../../images/avatar.jpg'

function ContactItem() {
  const [heartIconVisible, setHeartIconVisible] = useState(true)

  const toggleHeartIcon = () => {
    setHeartIconVisible(!heartIconVisible)
  }

  return (
    <div className={styles.contactItem}>
      <div className={styles.iconsContainer}>
        {heartIconVisible ? (
          <div className={styles.heartIconContainer} onClick={toggleHeartIcon}>
            <HeartIcon className={styles.contactHeartIcon} />
          </div>
        ) : (
          <div
            className={styles.fullHeartIconContainer}
            onClick={toggleHeartIcon}
          >
            <HeartFullIcon className={styles.contactHeartIcon} />
          </div>
        )}
        <div className={styles.editIconContainer}>
          <EditIcon className={styles.contactEditIcon} />
        </div>
        <div className={styles.deleteIconContainer}>
          <DeleteIcon className={styles.contactDeleteIcon} />
        </div>
      </div>
      <div className={styles.contactInfoContainer}>
        <img className={styles.contactImg} src={Avatar} alt="avatar" />
        <p>John Doe</p>
      </div>
    </div>
  )
}

export { ContactItem }
