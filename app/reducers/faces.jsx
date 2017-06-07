import axios from 'axios'
const RECEIVE_FACES = 'RECEIVE_FACES'

const initialFacesState ={
  selected: {},
  list: []
}
const reducer = (state=initialFacesState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case RECEIVE_FACES:
    newState.list = action.faces;
    break;
  }
  return newState
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
