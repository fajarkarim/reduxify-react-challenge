
const initialState = {
  comments: [
    'ah biasa ajalah, selow'
  ]
}

const commentsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'NEW_COMMENT':
      let newComment = [action.payload.text]
      return {...state, comments: state.comments.concat(newComment)}      
    default:
      console.log(`masuk dfault reducer`)
      return state

  }
}

export default commentsReducer
