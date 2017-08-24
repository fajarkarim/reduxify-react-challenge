
const initialState = {
  quotes: [
    {title: 'lalaa'}
  ]
}

const quotesReducer = (state=initialState, action) => {
  switch (action.type) {
    case `ADD_QUOTES`:
      console.log('masuk ADD_QUOTES')
      let newQuotes = action.payload.quotes
      return {...state, quotes: newQuotes}
    default:
      return state
  }
}

export default quotesReducer
