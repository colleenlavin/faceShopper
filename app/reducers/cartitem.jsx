import axios from 'axios'
import update from 'immutability-helper';

//CONSTANTS

const CHANGE_CART_ITEM = 'CHANGE_CART_ITEM'
const ADD_CART_ITEM = 'ADD_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

// REDUCER

const initialCartState = {
  cart: []
}

const reducer = (state=initialCartState, action) => {
  const newState = Object.assign({}, state);
  const cart = store.getState().cart
  const old = cart.filter(item=>item.id==action.cartItem.id)[0]
  const idx = cart.indexOf(old)

  switch (action.type) {

    case ADD_CART_ITEM:
      newState.cart = update(state, { cart: { $push: [action.cartItem] } }).cart
      break;

    case UPDATE_CART_ITEM:
      update(state,
        { cart: { $splice: [[idx, 1]], $push: [action.cartItem] } })  
      break;

    case REMOVE_CART_ITEM:
      update(state,
        { cart: { $splice: [[idx, 1]] } })  
      break;

  }
  return newState
}

// ACTION CREATORS:
export const addCartItem = cartItem => ({
  type: ADD_CART_ITEM, cartItem
})

export const changeCartItem = cartItem => ({
  type: CHANGE_CART_ITEM, cartItem
})

export const removeCartItem = () => ({
  type: REMOVE_CART_ITEM, cartItem
})

//ASYNC ACTION CREATORS

export const postCartItem = (cartItem) => (
  dispatch =>
    axios.post('/api/cart/:cartId')
      .then(faces => dispatch(receiveFaces(faces.data)))
   )

export const updateCartItem = (user_id) => (
  dispatch =>
    axios.get(`/api/faces/${id}`)
      .then(face => dispatch(selectFace(face.data)))
   )
