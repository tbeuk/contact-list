import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Contacts from './pages/Contacts'
import FavouriteContacts from './pages/FavouriteContacts'
import ContactNew from './pages/ContactNew'
import ContactDetails from './pages/ContactDetails'
import ContactEdit from './pages/ContactEdit'
import ErrorPage from './pages/ErrorPage'

import { Container } from './components/layout/Container'
import { Header } from './components/layout/Header'

import './css/main.css'

function App() {
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/favourites" exact component={FavouriteContacts} />
            <Route path="/contact-new" exact component={ContactNew} />
            <Route path="/contact/:userId" exact component={ContactDetails} />
            <Route path="/contact-edit/:userId" exact component={ContactEdit} />
            <Route path="/" component={ErrorPage} />
            <Route />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
