import axios from 'axios'
const RECEIVE_FACES = 'RECEIVE_FACES'

const reducer = (state=null, action) => {
  switch (action.type) {
  case RECEIVE_FACES:
    return action.faces
  }
  return state
}

export const receiveFaces = faces => ({
  type: RECEIVE_FACES, faces
})

export const getFaces = () =>
  dispatch =>
    axios.get('/api/faces')
      .then(faces => dispatch(receiveFaces(faces)))
      .catch(next) // ??? error handling

export default reducer
