import axios from 'axios'
import update from 'immutability-helper';
import store from '../store'

//CONSTANTS

const RECEIVE_CART = 'GET_CART'
const FETCH_CART = 'FETCH_CART'
const CHANGE_CART_ITEM = 'CHANGE_CART_ITEM'
const ADD_CART_ITEM = 'ADD_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

// REDUCER

const initialCartState = {
  cart: []
}

const reducer = (state = initialCartState, action) => {
  const newState = Object.assign({}, state);
  console.log("action is ", action)
  let old; let idx
  switch (action.type) {

    case RECEIVE_CART:
      newState.cart = action.cart

    case ADD_CART_ITEM:
      old = state.cart.filter(item => item.id == action.cartItem.id)[0]
      idx = state.cart.indexOf(old)
      newState.cart = state.cart.concat([action.cartItem])
      break;

    case CHANGE_CART_ITEM:
      old = state.cart.filter(item => item.id == action.cartItem.id)[0]
      idx = state.cart.indexOf(old)
      newState.cart = state.cart.slice(0, idx).concat(state.cart.slice(idx+1)).concat([action.cartItem])
      break;

    case REMOVE_CART_ITEM:
      newState.cart = update(state,
        { cart: { $splice: [[idx, 1]] } })
      break;
    
    default:
      return state
  }
  return newState
}

// ACTION CREATORS:

export const receiveCart = (cartId) => ({
  type: RECEIVE_CART, cart
})

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

export const fetchCart = (user, cartId) => (dispatch) => {
  let route = user != '' ? route = '' : route = `/api/carts/${sessionId}` //need to figure out route if we're logged in
  axios.get(route)
    .then(res => res.data)
    .then(res.json(data))
}

export const postCartItem = (user, sessionId, face, quantity=1) => (dispatch) => {
    let route = user != '' ? route = '' : route = `/api/carts/${sessionId}` 
    axios.post(route, {face, quantity})
      .then(res => res.data)
      .then(data => {
        data.cartItem.face = face
        data.created? dispatch(addCartItem(data.cartItem)) : dispatch(changeCartItem(data.cartItem))
      })
      .catch(err => console.log(err)) //Kate says to consider showing this error to the user 
  }

export const updateCartItem = (userId, sessionId, cartItem, quantity, cart) => (dispatch) => {
    let route
    userId ? route = '' : route = `/api/unAuthCarts/${sessionId}/${cartItem.id}` 
    axios.put(route, { quantity })
      .then(res => res.data)
      .then(cartItem => dispatch(changeCartItem(cartItem)))
      .catch(err => console.log(err))
  }

export default reducer