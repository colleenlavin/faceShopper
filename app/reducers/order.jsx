import axios from 'axios'

//Actions
const UPDATE_ORDER = 'UPDATE_ORDER'
const RECEIVE_ORDER = 'RECEIVE_ORDER'

// REDUCER:
const initialOrderState = {
  order: {}
}
const reducer = (state = initialOrdersState, action) => {
  const newState = Object.assign({}, state);
  console.log("action ", action)
  switch (action.type) {

    case RECEIVE_ORDER:
      newState.order = action.order;
      break;

    case UPDATE_ORDER:
      newState.order = action.order;
      break;


  }
  return newState
}

// ACTION CREATORS:
export const receiveOrder = order => ({
  type: RECEIVE_ORDER, order
})

export const updateOrder = order => ({
  type: UPDATE_ORDER, order
})

// DISPATCHERS:
export const postOrder = (data) => (
  dispatch =>
    axios.post('/api/order', data)
      .then(order => dispatch(receiveOrder(order.data)))
)

export const putOrder = () => (
  dispatch =>
    axios.put('/api/order', data)
      .then(order => dispatch(receiveOrder(order.data)))
)