import axios from 'axios'

const GUEST = 'GUEST'

const initialState = {
    sessionId: ''
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
  case GUEST:
    return action.sessionId
  }
  return state
}

export const setSession = sessionId => {
  return {type: GUEST, sessionId}
}

export const getSession = () => (dispatch) => {
    axios.get('/api/heartbeat')
    .then(res => {
      return res.data.sessionId})
    .then(sessionId => dispatch(setSession(sessionId)))
}

export default reducer
