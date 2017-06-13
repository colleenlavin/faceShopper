import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { updateCartItem } from '../reducers'
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
        console.log(this.state)
    }

    handleChange(itemId, quantity) {
        //get the map from local state (it's at key quantities)
        //update the key I'm concerned with (itemId)
        //and then reset it on state at quantiteis
        let cartQuantities = this.state.quantities
        cartQuantities.set(itemId, quantity)
        this.setState({quantities: cartQuantities})
        this.forceUpdate()
        console.log("handlechange ", this.state)
    }

    handleSubmit(event) { 
        event.preventDefault()
        console.log('submitted')
        //call a dispatcher that creates an order with the current cart
    }

    render() {
        console.log("this.props ", this.props)
        return (
            <Cart {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} 
                onEnter={this.setCartOnState} />
        )
    }
}

const mapStateToProps = (state) => ({ cart: state.cart.cart, user: state.auth, 
    sessionId:state.sessionId })

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);