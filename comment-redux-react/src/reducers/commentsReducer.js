
const initialState = {
  comments: [
    'ah biasa ajalah, selow'
  ]
}

const commentsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_COMMENT':
      console.log('masu new comment reducer')
      console.log(state)
      console.log(`payload`, action)
      let newComment = [action.payload.text]
      return {...state, comments: state.comments.concat(newComment)}
      // break;
    default:
      console.log(`masuk dfault reducer`)
      return state

  }
}

export default commentsReducer
