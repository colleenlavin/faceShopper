import axios from 'axios'
import {browserHistory} from 'react-router'


// ACTIONS:
const RECEIVE_FACES = 'RECEIVE_FACES'
const SELECT_FACE = 'SELECT_FACE'
const DESELECT_FACE = 'DESELECT_FACE'
const EDIT_FACE = 'EDIT_FACE'

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

    case EDIT_FACE:
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

export const editFace = editFace => ({
  type: EDIT_FACE, selectedFace
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

export const updateFace = (id, data) => {
  console.log("DATA???", data)
  return dispatch =>
    axios.put(`/api/faces/${id}`, data)
      .then(face => {
        dispatch(getFace(face.data.id))
      })
   }

export const addNewFace = (faceTitle, faceImage, faceDescription, facePrice, faceQuantity) =>{
  return (dispatch, getState) => {
    return axios.post(`/api/faces`, {title: faceTitle, image: faceImage, description: faceDescription, price: facePrice, quantity: faceQuantity})
    .then(res => res.data)
    .then(newFace => {
      const newListOfFaces = getState().faces.list.concat([newFace])
      dispatch(receiveFaces(newListOfFaces))
      browserHistory.push(`/faces`)
    })
  }
}

export default reducer
