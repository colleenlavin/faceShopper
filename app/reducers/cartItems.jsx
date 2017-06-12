import axios from 'axios'
import update from 'immutability-helper';
import store from '../store'

//CONSTANTS

const CHANGE_CART_ITEM = 'CHANGE_CART_ITEM'
const ADD_CART_ITEM = 'ADD_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

// REDUCER

const initialCartState = {
  cart: []
}

const reducer = (state = initialCartState, action) => {
  const newState = Object.assign({}, state);

  // This logic to identify the index of a member of an array isn't working because
  // store keeps being undefined.  I'm not sure why.  How did you all handle updating an array
  // in your senior enrichment projects?
  // const cart = store.getState().cart
  // const old = cart.filter(item => item.id == action.cartItem.id)[0]
  // const idx = cart.indexOf(old)

  let idx = 1

  switch (action.type) {

    case ADD_CART_ITEM:
      newState.cart = update(state, { cart: { $push: [action.cartItem] } }).cart
      break;

    case CHANGE_CART_ITEM:
      newState.cart = update(state, { cart: { $splice: [[idx, 1]], $push: [action.cartItem] } })
      break;

    case REMOVE_CART_ITEM:
      newState.cart = update(state,
        { cart: { $splice: [[idx, 1]] } })
      break;

  }
  return newState
}

// ACTION CREATORS:
export const addCartItem = (cartItem) => ({
  type: ADD_CART_ITEM, cartItem
})

export const changeCartItem = cartItem => ({
  type: CHANGE_CART_ITEM, cartItem
})

export const removeCartItem = () => ({
  type: REMOVE_CART_ITEM, cartItem
})

//ASYNC ACTION CREATORS

export const postCartItem = (userId, sessionId, face, quantity=1) => (
  dispatch => {
    console.log("IM IN POST CART ITEM")
    let route
    userId ? route = '' : route = `/api/carts/${sessionId}` //need to figure out route if we're logged in
    axios.post(route, {face})
      .then(
        res => {return res.data
        })
      .then(cartItem => {
        cartItem.face = face
        dispatch(addCartItem(cartItem))
      })
      .catch(err => console.log(err)) //how are we supposed to handle errors here?
  })

export const updateCartItem = (userId, sessionId, cartItem, quantity, cart) => (
  dispatch => {
    let route
    userId ? route = '' : route = `/api/unAuthCarts/${sessionId}/${cartItem.id}` //need to figure this out if we're logged in
    axios.put(route, { quantity })
      .then(res => res.data)
      .then(cartItem => dispatch(changeCartItem(cartItem)))
      .catch(err => console.log(err))
  })

export default reducer