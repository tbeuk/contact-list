import React from 'react'
import { useSelector } from 'react-redux'

import { Navigation } from '../../components/layout/Navigation'
import { Search } from '../../components/Search'
import { ContactsList } from '../../components/ContactsList'

import { filterContacts } from '../../utils/filterContacts'

function Contacts() {
  const contacts = useSelector((state) => state.contacts)
  const [contactList, setContactList] = React.useState(contacts)

  React.useEffect(() => {
    setContactList(contacts)
  }, [contacts])

  const filterContactsInput = (data) => {
    setContactList(filterContacts(data, contacts))
  }

  return (
    <>
      <Navigation />
      <Search onInputChange={filterContactsInput} />
      {contactList.length ? (
        <ContactsList contacts={contactList} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No contacts found</h1>
      )}
    </>
  )
}

export default Contacts
