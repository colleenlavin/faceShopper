import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { postCartItem } from '../reducers/cartItems'
import store from '../store'


const mapDispatchToProps = (dispatch) => {
    return {
        postCartItem: 
        (user, sessionId, face, selectedQuantity) => {
            dispatch(postCartItem(user, sessionId, face, selectedQuantity))
        }
    }
}

class CartContainer extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {quantities: new Map([])}
    }

    componentDidMount () {
        let cart = this.props.cart
        let cartQuantities = new Map([])
        cart.forEach(cartItem => cartQuantities.set(cartItem.id, cartItem.quantity))
        cart.map(cartItem => {
            this.setState({quantities: cartQuantities})
        })
    }

    handleChange(itemId, quantity) {
        let cartQuantities = this.state.quantities
        cartQuantities.set(itemId, quantity)
        this.setState({quantities: cartQuantities})
        
    }

    handleSubmit(user, sessionId, event) { 
        event.preventDefault()
        this.props.cart.forEach(cartItem => {
            let face = cartItem.face
            let quantity = cartItem.quantity
            this.props.postCartItem(user, sessionId, face, quantity)
        })
        console.log("props", this.props)
        this.props.router.push('/checkout')
    }

    render() {
        return (
            <Cart {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
        )
    }
}

const mapStateToProps = (state) => ({ cart: state.cart.cart, user: state.auth, 
    sessionId:state.sessionId })

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);