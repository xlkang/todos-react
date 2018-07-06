import store from '../redux/store'

export const getLoggedUser = () => {
  setTimeout(() => {
    store.dispatch({
      type: 'GET_LOGGED_USER'
    })
  }, 500)
}

export const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      store.dispatch({
        type: 'SET_LOGGED_USER',
        logged: true
      })
      resolve()
    }, 500)
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      store.dispatch({
        type: 'SET_LOGGED_USER',
        logged: false
      })
      resolve()
    }, 500)
  })
}