import { createStore } from 'redux'

import commentsReducer from '../reducers/commentsReducer'

const store = createStore(commentsReducer)

export default store
