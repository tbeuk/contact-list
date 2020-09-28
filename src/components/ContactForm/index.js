import React from 'react'
import PropTypes from 'prop-types'

import { NavLink, useHistory } from 'react-router-dom'
import { useForm, useFieldArray } from 'react-hook-form'

import { PersonIcon } from '../Icons/PersonIcon'
import { EmailIcon } from '../Icons/EmailIcon'
import { PhoneIcon } from '../Icons/PhoneIcon'
import { AddIcon } from '../Icons/AddIcon'
import { ArrowBackIcon } from '../Icons/ArrowBackIcon'
import { UploadIcon } from '../Icons/UploadIcon'

import { uuidv4 } from '../../utils/uuid'
import { validateName } from '../../utils/validateName'
import { validatePhone } from '../../utils/validatePhone'
import { ValidateEmail } from '../../utils/validateEmail'
import { displayPhoneError } from '../../utils/displayPhoneError'

import styles from './contact-form.module.css'

function ContactForm({ fullName, email, numbers, id }) {
  const history = useHistory()
  const { register, control, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: email,
      fullName: fullName,
      numbers: numbers,
    },
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'numbers',
  })

  const deletePhoneNumberDisabled =
    fields.length > 1 ? '' : styles.deleteNumberDisabled

  const onSubmit = (data) => {
    // todo - move state to redux
    // if there is no prop id we are creating new contact
    data.id = id || uuidv4()
    const contacts = localStorage.getItem('contacts')

    if (!contacts) {
      localStorage.setItem('contacts', JSON.stringify([data]))
    } else {
      const newContacts = JSON.parse(contacts)
      const contactIndex = newContacts.findIndex((contact) => contact.id === id)

      // if contact exists update object
      if (contactIndex >= 0) {
        newContacts[contactIndex] = data
      } else {
        newContacts.push(data)
      }

      localStorage.setItem('contacts', JSON.stringify(newContacts))
      history.push('/')
    }
  }

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.uploadImageContainer}>
        <input
          className={styles.imageInput}
          type="file"
          id="imgFile"
          name="filename"
        />
        <button className={styles.uploadImageButton} type="button">
          <UploadIcon />
        </button>
      </div>
      <NavLink to="/" className={styles.backButton}>
        <ArrowBackIcon height={20} width={20} />
      </NavLink>
      <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>
            <PersonIcon />
            <span>full name</span>
          </div>
          <input
            className={styles.input}
            ref={register({ validate: validateName })}
            name="fullName"
            placeholder="full name"
          />
          {errors.fullName && (
            <p className={styles.error}>Please enter a valid name</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>
            <EmailIcon />
            <span>email</span>
          </div>
          <input
            className={styles.input}
            ref={register({ validate: ValidateEmail })}
            name="email"
            placeholder="email"
          />
          {errors.email && (
            <p className={styles.error}>Please enter valid email address</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>
            <PhoneIcon />
            <span>numbers</span>
          </div>

          {fields.map((item, index) => {
            return (
              <div key={item.id} className={styles.phoneInputsContainer}>
                <div>
                  <input
                    className={styles.input}
                    ref={register({ validate: validatePhone })}
                    name={`numbers[${index}].phoneNumber`}
                    defaultValue={`${item.phoneNumber}`}
                    placeholder="phone number"
                  />
                  {displayPhoneError(
                    `numbers[${index}].phoneNumber`,
                    errors,
                    'phoneNumber'
                  ) && (
                    <p className={styles.error}>
                      Please enter a valid phone number
                    </p>
                  )}
                </div>

                <div className={styles.phoneLabelButtonsContainer}>
                  <input
                    className={`${styles.input} ${styles.phoneLabelInput}`}
                    ref={register({ validate: validateName })}
                    name={`numbers[${index}].phoneLabel`}
                    defaultValue={`${item.phoneLabel}`}
                    placeholder="phone number label"
                  />
                  {displayPhoneError(
                    `numbers[${index}].phoneLabel`,
                    errors,
                    'phoneLabel'
                  ) && (
                    <p className={styles.error}>
                      Please enter a valid phone label
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className={`${styles.deleteNumberButton} ${deletePhoneNumberDisabled}`}
                  >
                    <AddIcon height={12} fillColor="#B4BEBC" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => {
            append({ phoneNumber: '', phoneLabel: '' })
          }}
          className={styles.addNumberButton}
        >
          <div className={styles.addNumberPlus}>
            <AddIcon height={10} />
          </div>
          <p>Add number</p>
        </button>

        <div className={styles.buttonsContainer}>
          <NavLink
            to="/"
            className={`${styles.formButton} ${styles.cancelButton}`}
          >
            Cancel
          </NavLink>

          <button
            className={`${styles.formButton} ${styles.saveButton}`}
            name="submit"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

ContactForm.defaultProps = {
  id: '',
  fullName: '',
  email: '',
  numbers: [{ phoneNumber: '', phoneLabel: '' }],
}

ContactForm.propTypes = {
  id: PropTypes.string,
  fullName: PropTypes.string,
  email: PropTypes.string,
  numbers: PropTypes.array,
}

export { ContactForm }
