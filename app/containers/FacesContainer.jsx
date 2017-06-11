import {connect} from 'react-redux'
import Faces from '../components/Faces'
import { postCartItem } from '../reducers/cartItems'

const mapStateToProps = (state) => ({faces: state.faces.list, userId: state.userId, 
  sessionId: state.sessionId})
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (evt) => {
        dispatch(postCartItem(userId, sessionId, evt.target.value))
    }
  }
}

const FacesContainer = connect(mapStateToProps, mapDispatchToProps)(Faces);
export default FacesContainer;
