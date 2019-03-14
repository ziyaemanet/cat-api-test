export default (state = null, action) => {
  if(action.error) {
    return state
  }

  switch (action.type) {
    case 'GET_IMAGES_FULFILLED':
      return action.payload
    case 'CLEAR_RESULTS':
      return null
    default:
      return state
  }
}
