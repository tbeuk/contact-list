// convert object to string and store in localStorage
import { createStore } from 'redux'

import ContactsReducer from './reducers/contacts'

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('contacts', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('contacts')
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(ContactsReducer, loadFromLocalStorage())

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => {
  return saveToLocalStorage(store.getState())
})

export default store
