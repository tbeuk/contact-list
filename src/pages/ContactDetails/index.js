import React from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'

import Avatar from '../../images/avatar.jpg'
import { HeartIcon } from '../../components/Icons/HeartIcon'
import { EditIcon } from '../../components/Icons/EditIcon'
import { ArrowBackIcon } from '../../components/Icons/ArrowBackIcon'
import { EmailIcon } from '../../components/Icons/EmailIcon'
import { PhoneIcon } from '../../components/Icons/PhoneIcon'

import styles from './contact-details.module.css'

const ContactDetails = () => {
  const history = useHistory()
  const { userId } = useParams()
  const [contact, setContact] = React.useState({})

  React.useEffect(() => {
    const contacts = localStorage.getItem('contacts')

    if (!userId || !contacts) {
      history.push('/')
    } else {
      const contactArr = JSON.parse(contacts).filter((contact) => {
        return contact.id === userId
      })

      if (!contactArr.length) {
        history.push('/')
      } else {
        setContact({ ...contactArr[0] })
      }
    }
  }, [])

  return (
    <div className={styles.contactDetailContainer}>
      <header className={styles.contactDetailHeader}>
        <div className={styles.mobileHeaderTop}>
          <NavLink to="/" className={styles.backButton}>
            <ArrowBackIcon height={20} width={20} />
          </NavLink>
          <div>
            <HeartIcon />
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
            <img className={styles.contactImgMobile} src={Avatar} alt="" />
            <NavLink to="/" className={styles.backButton}>
              <ArrowBackIcon height={20} width={20} />
            </NavLink>
            <h1>{contact.fullName}</h1>
          </div>
          <div className={styles.headerContentRight}>
            <HeartIcon />
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
