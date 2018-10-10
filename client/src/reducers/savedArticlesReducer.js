export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SAVED_ARTICLES':
      return action.payload
    default:
      return state;
  }
}
