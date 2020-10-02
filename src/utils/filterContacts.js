export function filterContacts(data, contacts) {
  if (data.trim().length) {
    const filteredContacts = contacts.filter((contact) => {
      return contact.fullName.toLowerCase().includes(data.toLowerCase())
    })

    if (filteredContacts.length) {
      return filteredContacts
    } else {
      return []
    }
  } else {
    return contacts
  }
}
