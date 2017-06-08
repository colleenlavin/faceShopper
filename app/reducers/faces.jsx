import axios from 'axios'

// ACTIONS:
const RECEIVE_FACES = 'RECEIVE_FACES'
const SELECT_FACE = 'SELECT_FACE'
const DESELECT_FACE = 'DESELECT_FACE'

// REDUCER:
const initialFacesState ={
  selected: {},
  list: []
}
const reducer = (state=initialFacesState, action) => {
  const newState = Object.assign({}, state);
  console.log("action ", action)
  switch (action.type) {

    case RECEIVE_FACES:
      newState.list = action.faces;
      break;

    case SELECT_FACE:
      newState.selected = action.selectedFace;
      break;

    case DESELECT_FACE:
      newState.selected = action.selectedFace;
      break;

  }
  return newState
}

// ACTION CREATORS:
export const receiveFaces = faces => ({
  type: RECEIVE_FACES, faces
})

export const selectFace = selectedFace => ({
  type: SELECT_FACE, selectedFace
})

export const deselectFace = () => ({
  type: DESELECT_FACE,
  selectedFace: {}
})

// DISPATCHERS:

export const getFaces = () => (
  dispatch =>
    axios.get('/api/faces')
      .then(faces => dispatch(receiveFaces(faces.data)))
   )

export const getFace = id => (
  dispatch =>
    axios.get(`/api/faces/${id}`)
      .then(face => dispatch(selectFace(face.data)))
   )


export default reducer
