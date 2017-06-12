import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { updateCartItem } from '../reducers'

class CartContainer extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(item, quant) {
        dispatch(updateCartItem(props.userId, props.sessionId, item, quant))    //userId should come from state, be truthy if user_id exists, else falsy
    }

    handleSubmit(event) { 
        console.log('submitted')
        //call a dispatcher that creates an order with the current cart
    }

    render() {
        return (
            <Cart {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        )
    }
}

const mapStateToProps = (state) => ({ cart: state.cart.cart, user: state.auth, 
    sessionId:state.sessionId })

export default connect(mapStateToProps)(CartContainer);