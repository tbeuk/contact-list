import * as actionTypes from '../../constants/actionTypes'

export function getContacts() {
  return {
    type: actionTypes.GETCONTACTS,
  }
}

export function addContact(contactObj) {
  return {
    type: actionTypes.ADDCONTACT,
    payload: contactObj,
  }
}

export function updateContact(contactObj) {
  return {
    type: actionTypes.UPDATECONTACT,
    payload: contactObj,
  }
}

export function deleteContact(contactId) {
  return {
    type: actionTypes.DELETECONTACT,
    payload: contactId,
  }
}

export function toggleFavContact(contactId) {
  return {
    type: actionTypes.TOOGLEFAVS,
    payload: contactId,
  }
}
