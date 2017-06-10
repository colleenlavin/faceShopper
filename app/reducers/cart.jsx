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
 
  switch (action.type) {

    case ADD_CART_ITEM:
      newState.cart = update(state, { cart: { $push: [action.cartItem] } }).cart
      break;

    case UPDATE_CART_ITEM:
      let oldCartItem = store.getState().cart.filter(cartItem => cartItem.id == action.cartItem.id)[0]
      let idx = store.getState().campuses.indexOf(oldCartItem)
      update(state,
        { campuses: { $splice: [[idx, 1]], $push: [action.campus] } })  
      break;

    case REMOVE_CART_ITEM:
      newState.selectedFace = action.selectedFace;
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

export const updateCartItem = id => (
  dispatch =>
    axios.get(`/api/faces/${id}`)
      .then(face => dispatch(selectFace(face.data)))
   )
