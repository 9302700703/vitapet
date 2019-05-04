export const login = (state = { login: false }, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return { ...state, login: true, username: action.username }
    }
    case 'LOG_OUT': {
      return { ...state, login: false }
    }
    default: return state
  }
}