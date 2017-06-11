import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddFace from '../components/AddFace'
import Face from '../components/Face'
import { postCartItem} from '../reducers/cartItems'

const mapStateToProps = (state) => ({
    face: state.faces.selected, user: state.auth,
    sessionId: state.sessionId
})
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit:
        (user, sessionId, face, quantity, evt) => {
            console.log("user is ", user)
            console.log("session id is ", sessionId)
            console.log("face.id is ", face.id)
            console.log("quantity is ", quantity)
            dispatch(postCartItem(user, sessionId, face.id, quantity))
            // FaceConter.setState({ selectedQuantity: 1 }) // how do we do this?
            evt.preventDefault()
        }
    }
}

class FaceContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedQuantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            selectedQuantity: evt.target.value
        })
    }

    render() {
        return (
            <div>
                <Face {...this.state} {...this.props} />
                <AddFace {...this.state} {...this.props} handleChange={this.handleChange} />
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FaceContainer);
