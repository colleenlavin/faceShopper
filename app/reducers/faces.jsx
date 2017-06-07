import axios from 'axios'

/*Actions*/
const RECEIVE_FACES = 'RECEIVE_FACES'

/*Reducer*/
const initialFacesState ={
  selected: {}, // selectedFace. self-documenting -- KHAM
  list: [] // faceList
}
const reducer = (state=initialFacesState, action) => {
  const newState = Object.assign({}, state);
  console.log("action ", action)
  switch (action.type) {
  case RECEIVE_FACES:
    newState.list = action.faces;
    break;
    // default case -- KHAM
  }
  return newState
}

/*Action Creators*/
export const receiveFaces = faces => ({
  type: RECEIVE_FACES, faces
})

export const getFaces = () => (
  dispatch =>
    axios.get('/api/faces')
      .then(faces => dispatch(receiveFaces(faces)))
      // handle your errors
      // console.log(error) --> showing the user the error. Look into growls if you feel like it. -- KHAM
   )



export default reducer
