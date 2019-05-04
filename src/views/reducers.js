export const avatar = (state = { avatar: null }, action) => {
  switch (action.type) {
    case 'AVATAR': {
      return {
        ...state,
        avatar: action.avatar
      }
    }
    default: return state
  }
}