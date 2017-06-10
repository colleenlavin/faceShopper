import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddFace from '../components/AddFace'
import Face from '../components/Face'
import {postToCart} from '../reducers/cartItem'

const mapStateToProps = (state) => ({face: state.selectedFace, userId: state.userId, 
    sessionId: state.sessionId })

class FaceContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedQuantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt){
        this.setState({
            selectedQuantity: evt.target.value
        })
    }

    handleSubmit(selectedFace, evt) {
        evt.preventDefault()
        dispatch(postToCart(userId, sessionId, selectedFace, this.state.quantity))
        this.setState({selectedQuantity : 0})
    }

    render() {
        return (
            <div>
                <Face {...this.state} {...this.props} />
                <AddFace {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FaceContainer);
