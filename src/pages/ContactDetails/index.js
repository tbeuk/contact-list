import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Avatar from '../../images/avatar.jpg'
import { HeartIcon } from '../../components/Icons/HeartIcon'
import { HeartFullIcon } from '../../components/Icons/HeartFullIcon'
import { EditIcon } from '../../components/Icons/EditIcon'
import { ArrowBackIcon } from '../../components/Icons/ArrowBackIcon'
import { EmailIcon } from '../../components/Icons/EmailIcon'
import { PhoneIcon } from '../../components/Icons/PhoneIcon'

import * as actionCreators from '../../store/actions'

import styles from './contact-details.module.css'

const ContactDetails = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { userId } = useParams()
  const [contact, setContact] = React.useState({})
  const contacts = useSelector((state) => state.contacts)
  const favsArray = useSelector((state) => state.favs)
  const [heartIconVisible, setHeartIconVisible] = React.useState(true)

  React.useEffect(() => {
    const contactArray = contacts.filter((contact) => contact.id === userId)
    if(contactArray.length) {
      setContact(contactArray[0])
    } else {
      history.push('/')
    }
  }, [contacts])

  React.useEffect(() => {
    const favIndex = favsArray.findIndex((contactId) => {
      return contactId === userId
    })
    // if contact item is inside favourite contacts
    if (favIndex >= 0) {
      setHeartIconVisible(false)
    }
  }, [favsArray, userId])

  const toggleHeartIcon = (event) => {
    event.stopPropagation()
    setHeartIconVisible(!heartIconVisible)
    dispatch(actionCreators.toggleFavContact(userId))
  }

  return (
    <div className={styles.contactDetailContainer}>
      <header className={styles.contactDetailHeader}>
        <div className={styles.mobileHeaderTop}>
          <NavLink to="/" className={styles.backButton}>
            <ArrowBackIcon height={20} width={20} />
          </NavLink>
          <div>
          {heartIconVisible ? (
            <button className={styles.heartIconButton} onClick={toggleHeartIcon}>
              <HeartIcon className={styles.contactHeartIcon} />
            </button>
            ) : (
            <button className={styles.heartIconButton} onClick={toggleHeartIcon}>
              <HeartFullIcon className={styles.contactHeartIcon} />
            </button>
            )}
            <NavLink to={`/contact-edit/${userId}`}>
              <EditIcon className={styles.contactDetailEditIcon} />
            </NavLink>
          </div>
        </div>
        <img
          className={styles.contactImg}
          src={contact.imgSrc || Avatar}
          alt=""
        />
        <div className={styles.headerContent}>
          <div className={styles.headerContentLeft}>
            <img className={styles.contactImgMobile} src={contact.imgSrc || Avatar} alt="" />
            <NavLink to="/" className={styles.backButton}>
              <ArrowBackIcon height={20} width={20} />
            </NavLink>
            <h1>{contact.fullName}</h1>
          </div>
          <div className={styles.headerContentRight}>
          {heartIconVisible ? (
            <button className={styles.heartIconButton} onClick={toggleHeartIcon}>
              <HeartIcon className={styles.contactHeartIcon} />
            </button>
            ) : (
            <button className={styles.heartIconButton} onClick={toggleHeartIcon}>
              <HeartFullIcon className={styles.contactHeartIcon} />
            </button>
            )}
            <NavLink to={`/contact-edit/${userId}`}>
              <EditIcon className={styles.contactDetailEditIcon} />
            </NavLink>
          </div>
        </div>
      </header>
      <div className={styles.contactDetailContent}>
        <div className={styles.contactEmailContainer}>
          <div className={styles.contactEmailContent}>
            <EmailIcon />
            <p>email</p>
          </div>
          <p className={styles.contactEmail}>{contact.email}</p>
        </div>
        <div className={styles.contactNumbersContainer}>
          <div className={styles.contactNumbersContent}>
            <PhoneIcon />
            <p>numbers</p>
          </div>
          <div className={styles.contactNumbersList}>
            {contact.numbers?.length &&
              contact.numbers.map((number, index) => {
                return (
                  <div
                    key={`contact-${index}`}
                    className={styles.contactNumberContent}
                  >
                    <p className={styles.numberLabel}>{number.phoneLabel}</p>
                    <p className={styles.numberValue}>{number.phoneNumber}</p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
