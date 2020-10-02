import React from 'react'

import { useSelector } from 'react-redux'

import { Navigation } from '../../components/layout/Navigation'
import { Search } from '../../components/Search'
import { ContactsList } from '../../components/ContactsList'

import { filterContacts } from '../../utils/filterContacts'

function FavouriteContacts() {
  const favs = useSelector((state) => state.favs)
  const contacts = useSelector((state) => state.contacts)
  const [favContacts, setFavContacts] = React.useState([])
  const [filteredContactsList, setFilteredContactsList] = React.useState([])

  React.useEffect(() => {
    const newContactsArray = contacts.filter((contact) => {
      return favs.includes(contact.id)
    })

    setFavContacts(newContactsArray)
  }, [contacts, favs])

  React.useEffect(() => {
    setFilteredContactsList(favContacts)
  }, [favContacts])

  const filterContactsInput = (data) => {
    setFilteredContactsList(filterContacts(data, favContacts))
  }

  return (
    <>
      <Navigation />
      <Search onInputChange={filterContactsInput} />
      <ContactsList contacts={filteredContactsList} showAddContactBtn={false} />
    </>
  )
}

export default FavouriteContacts
