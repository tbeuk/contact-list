
export function displayPhoneError(nameAttr, errors, key) {
  let error = []
  if (errors.numbers) {
    // check if errors for numbers contains phoneLabel or phoneNumber key
    error = errors.numbers.filter((error = {}) => {
      return error[key]?.ref.name === nameAttr
    })
  }
  if (error.length) {
    return true
  }
  return false
}