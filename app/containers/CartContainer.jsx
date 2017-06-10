import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import store from '../store'
import { updateCartItem } from '../reducers'


const mapStateToProps = (state) => ({ cart: state.cart })

class CartContainer extends Component {
    constructor(props) {
        super(props)

        //we expect cart on store to be an array of cart items
        //we expect cart items to eagerly load faces.  
        //format of a cart item
        // {id: 1, quantity: 10, price: 2.00, face_id: 1, cart_id:1, face:
        // {id: 3, title: 'Hermione Granger', image: 'www.pics.com', description:
        // 'super cool', price: 2.00, quantity: 2000}}

        this.state = {
            cart: [{id:'9', price:'5.00', quantity:'1', 
            face: {title: 'Hermione Granger'}}],
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(quant, item) {
            //dispatch an action 
            //this is actually a redux operation in which
            //we update the relevant cart item. 
        dispatch(updateCartItem(item, quant))    
        
        console.log('event', evt.target)
    }
    handleSubmit() { }

    render() {
        return (
            <Cart cart={this.state.cart} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        )
    }
}


export default connect(mapStateToProps)(CartContainer);