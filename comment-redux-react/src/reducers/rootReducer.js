import { combineReducers } from 'redux'

import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  commentStore: commentsReducer  
})


export default rootReducer
