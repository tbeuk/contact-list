export function validateName(name) {
  if (/^[A-Za-z\s]+$/.test(name.trim())) {
    return true
  }
  return false
}
