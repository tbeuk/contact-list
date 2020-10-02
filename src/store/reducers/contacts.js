import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  contacts: [],
  favs: [],
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETCONTACTS:
      return {
        ...state,
      }
    case actionTypes.ADDCONTACT:
      const addedContacts = [...state.contacts, action.payload]
      return {
        ...state,
        contacts: addedContacts,
      }
    case actionTypes.UPDATECONTACT:
      const updatedContacts = [...state.contacts]
      const contactIndex = updatedContacts.findIndex((contact) => {
        return contact.id === action.payload.id
      })
      if (contactIndex >= 0) {
        updatedContacts[contactIndex] = action.payload
      }
      return {
        ...state,
        contacts: updatedContacts,
      }
    case actionTypes.DELETECONTACT:
      const newContacts = state.contacts.filter((contact) => {
        return contact.id !== action.payload
      })
      return {
        ...state,
        contacts: newContacts,
      }
    case actionTypes.TOOGLEFAVS:
      const favIndex = state.favs.findIndex((favId) => {
        return favId == action.payload
      })
      if (favIndex >= 0) {
        const newFavs = state.favs.filter((favId) => {
          return favId !== state.favs[favIndex]
        })
        return {
          ...state,
          favs: newFavs,
        }
      } else {
        return {
          ...state,
          favs: [...state.favs, action.payload],
        }
      }
  }
  return state
}

export default contactsReducer
