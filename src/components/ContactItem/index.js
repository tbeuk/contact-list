import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { HeartIcon } from '../Icons/HeartIcon'
import { HeartFullIcon } from '../Icons/HeartFullIcon'
import { EditIcon } from '../Icons/EditIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'

import styles from './contact-item.module.css'
import Avatar from '../../images/avatar.jpg'
import * as actionCreators from '../../store/actions'

function ContactItem({ fullName, id, imgSrc }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const favsArray = useSelector((state) => state.favs)
  const [heartIconVisible, setHeartIconVisible] = React.useState(true)

  React.useEffect(() => {
    const favIndex = favsArray.findIndex((contactId) => {
      return contactId === id
    })
    // if contact item is inside favourite contacts
    if (favIndex >= 0) {
      setHeartIconVisible(false)
    }
  }, [favsArray, id])

  const toggleHeartIcon = (event) => {
    event.stopPropagation()
    setHeartIconVisible(!heartIconVisible)
    dispatch(actionCreators.toggleFavContact(id))
  }

  const editContactHandle = (event) => {
    event.stopPropagation()
    history.push(`/contact-edit/${id}`)
  }

  const deleteContactHandler = (event) => {
    event.stopPropagation()
    dispatch(actionCreators.deleteContact(id))
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
          <button className={styles.heartIconButton} onClick={toggleHeartIcon}>
            <HeartIcon className={styles.contactHeartIcon} />
          </button>
        ) : (
          <button className={styles.heartIconButton} onClick={toggleHeartIcon}>
            <HeartFullIcon className={styles.contactHeartIcon} />
          </button>
        )}
        <button
          onClick={editContactHandle}
          className={styles.editContactButton}
        >
          <EditIcon className={styles.contactEditIcon} />
        </button>
        <button
          onClick={deleteContactHandler}
          className={styles.deleteContactButton}
        >
          <DeleteIcon className={styles.contactDeleteIcon} />
        </button>
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
