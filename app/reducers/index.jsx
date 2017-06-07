import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  faces: require('./faces').default,
})

export default rootReducer
