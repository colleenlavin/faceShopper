import React, { Component } from 'react'
import _ from 'lodash'
import {Link} from 'react-router'

export default function Cart({ cart, removeItem, handleChange, handleSubmit }) {
  /* This function assumes that the props will have the following things available:
        - cartItems (an array of objects representing all the items in the cart)
            - each item should have:
                - id
                - name
                - quantity
                - price
        - removeItem (a method that takes an item id and removes that item from the cart)
        - handleSubmit and handleChange need to be mapped in as well from container for editing quantity
  */

  // for now we are hard coding options to be 10 in the future
  // it should be redefined in every cart item
  // the smart container should contain a function that adds to each cartItem
  // the available quantity in the warehouse (something that can be done by searching)
  // for that face in the list of all faces which is on the store.
  //item will need a new name for quantity. 
  //Possibly make it a text box
  const options = _.range(10)

  return (
    <div>
      <h1>Your cart:</h1>
      <div id="cart-container">
        <form onSubmit={handleSubmit}>
          <ul>
            {
              cart && cart.map(item => (
                <div key={item.id}>
                  <li>{item.face.title}
                    <div title="price" className="price">${item.price}</div>
                    <div title="delete" className="del-button" onClick={() => removeItem(item.id)}>Remove item?</div>
                    <div>
                      <legend>Quantity:</legend>
                      <select
                        className="quantity"
                        value={item.quantity}
                        onChange={(evt) => { handleChange(evt.target.value, item) }} >
                        {options.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </li>
                </div>
              ))
            }
          </ul>
          <Link to={`/checkout`}>
            <button type="submit" className="btn btn-danger">
              Checkout</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
