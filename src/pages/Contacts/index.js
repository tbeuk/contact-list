import React from 'react'

import { Navigation } from '../../components/layout/Navigation'
import { Search } from '../../components/Search'
import { ContactsList } from '../../components/ContactsList'

function Contacts() {
  return (
    <>
      <Navigation />
      <Search />
      <ContactsList />
    </>
  )
}

export default Contacts
