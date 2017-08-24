import { combineReducers } from 'redux'

import commentsReducer from './commentsReducer'
import quotesReducer from './quotesReducer'

const rootReducer = combineReducers({
  commentStore: commentsReducer,
  quoteStore: quotesReducer
})


export default rootReducer
