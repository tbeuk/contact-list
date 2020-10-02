import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ContactForm } from '../../components/ContactForm'

const ContactEdit = () => {
  const { userId } = useParams()
  const history = useHistory()
  const contacts = useSelector((state) => state.contacts)
  const [contact, setContact] = React.useState()

  React.useEffect(() => {
    if (!userId) {
      history.push('/')
    } else {
      const contactIndex = contacts.findIndex(
        (contact) => contact.id === userId
      )
      setContact(contacts[contactIndex])
    }
  }, [contacts, history, userId])

  return (
    <>
      <ContactForm {...contact} />
    </>
  )
}

export default ContactEdit
