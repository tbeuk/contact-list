export function validatePhone(phone) {
  if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone.trim())) {
    return true
  }
  return false
}
