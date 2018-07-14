export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CNN_NEWS':
      return action.payload
    default:
      return state;
  }
}
