import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

import { ContactForm } from '../../components/ContactForm'

const ContactEdit = ({ history }) => {
  const { userId } = useParams()
  let contact = []

  if (!localStorage.getItem('contacts')) {
    history.push('/')
  } else {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    contact = contacts.filter((item) => {
      return item.id === userId
    })

    if (!contact.length) {
      history.push('/')
    }
  }

  return (
    <>
      <ContactForm {...contact[0]} />
    </>
  )
}

ContactEdit.defaultProps = {
  history: {},
}

ContactEdit.propTypes = {
  history: PropTypes.object,
}

export default ContactEdit
