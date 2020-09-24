import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Contacts from './pages/Contacts'
import FavouriteContacts from './pages/FavouriteContacts'
import ContactNew from './pages/ContactNew'
import ContactDetails from './pages/ContactDetails'
import ContactEdit from './pages/ContactEdit'
import ErrorPage from './pages/ErrorPage'

import './css/main.css'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/favourites" exact component={FavouriteContacts} />
          <Route path="/contact-new" exact component={ContactNew} />
          <Route
            path="/contact-details/:userId"
            exact
            component={ContactDetails}
          />
          <Route path="/contact-edit/:userId" exact component={ContactEdit} />
          <Route path="/" component={ErrorPage} />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
