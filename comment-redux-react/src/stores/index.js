import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import commentsReducer from '../reducers/commentsReducer'

const store = createStore(commentsReducer, applyMiddleware(logger))

export default store
