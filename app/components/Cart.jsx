import React, { Component } from 'react'

export default function Cart (props) {
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

  return (
    <div>
      <h1>Your cart:</h1>
      <div id="cart-container">
        <ul>
        {
          props.cartItems && props.cartItems.map(item => (
            <div key={ item.id }>
              <li>{ item.name }
                <span title="quantity" className="quantity">{ item.quantity }</span>
                <span title="price" className="price">${ item.price }</span>
                <span title="delete" className="del-button" onClick={ () => props.removeItem(item.id) }>Remove item?</span>
              </li>
            </div>
          ))
        }
        </ul>
      </div>
    </div>
  );
}
