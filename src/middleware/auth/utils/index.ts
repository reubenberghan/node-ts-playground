function isPasswordValid(password: string) {
  return (
    password.length > 7 &&
    /\d/.test(password) &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\W/.test(password) &&
    !/[\s]/.test(password)
  )
}

export { isPasswordValid }
