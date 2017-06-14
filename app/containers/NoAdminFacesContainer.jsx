import {connect} from 'react-redux'
import NoAdminFaces from '../components/NoAdminFaces'
import { postCartItem } from '../reducers/cartItems'
// import {deleteFace} from '../reducers/faces'

const mapStateToProps = (state) => ({faces: state.faces.list, user: state.auth, 
  sessionId: state.sessionId})
  
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (evt) => {
        dispatch(postCartItem(userId, sessionId, evt.target.value))
    // },
    // deleteOne(faceId) {
    //   dispatch(deleteFace(faceId))
    }
  }
}

const NoAdminFacesContainer = connect(mapStateToProps, mapDispatchToProps)(NoAdminFaces);
export default NoAdminFacesContainer;