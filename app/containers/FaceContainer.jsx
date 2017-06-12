import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddFace from '../components/AddFace'
import Face from '../components/Face'
import { postCartItem} from '../reducers/cartItems'

const mapStateToProps = (state) => ({
    face: state.faces.selected, user: state.auth,
    sessionId: state.sessionId
})
const mapDispatchToProps = (dispatch) => {
    return {
        postCartItem: 
        (user, sessionId, face, selectedQuantity) => {
            console.log("HELLLO")
            dispatch(postCartItem(user, sessionId, face, selectedQuantity))
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            selectedQuantity: evt.target.value
        })
    }

    handleSubmit(user, sessionId, face, selectedQuantity, evt) {
        evt.preventDefault()
        postCartItem(user, sessionId, face, quantity)
        this.setState({ selectedQuantity: 1 }) 
        console.log("I'M HERE")
    }

    render() {
        return (
            <div>
                <Face {...this.state} {...this.props} />
                <AddFace {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(FaceContainer);
