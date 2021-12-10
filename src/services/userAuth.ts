export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')

  window.location.href = '/'
}

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token')

  return true
}
