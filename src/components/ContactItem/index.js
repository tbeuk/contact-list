import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { HeartIcon } from '../Icons/HeartIcon'
import { HeartFullIcon } from '../Icons/HeartFullIcon'
import { EditIcon } from '../Icons/EditIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'

import styles from './contact-item.module.css'
import Avatar from '../../images/avatar.jpg'

function ContactItem({ fullName, id, imgSrc }) {
  const history = useHistory()
  const [heartIconVisible, setHeartIconVisible] = useState(true)

  const toggleHeartIcon = () => {
    setHeartIconVisible(!heartIconVisible)
  }

  const editContactHandle = (event) => {
    event.stopPropagation()
    history.push(`/contact-edit/${id}`)
  }

  return (
    <div
      onClick={() => {
        history.push(`/contact/${id}`)
      }}
      className={styles.contactItem}
    >
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
        <button onClick={editContactHandle} className={styles.editIconButton}>
          <EditIcon className={styles.contactEditIcon} />
        </button>
        <div className={styles.deleteIconContainer}>
          <DeleteIcon className={styles.contactDeleteIcon} />
        </div>
      </div>
      <div className={styles.contactInfoContainer}>
        <img
          className={styles.contactImg}
          src={imgSrc || Avatar}
          alt="avatar"
        />
        <p>{fullName}</p>
      </div>
    </div>
  )
}

ContactItem.defaultProps = {
  fullName: '',
  id: '',
  imgSrc: '',
}

ContactItem.propTypes = {
  fullName: PropTypes.string,
  id: PropTypes.string,
  imgSrc: PropTypes.string,
}

export { ContactItem }
