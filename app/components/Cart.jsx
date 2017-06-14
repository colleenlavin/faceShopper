import React, { Component } from 'react'
import _ from 'lodash'

export default function Cart({handleChange, handleSubmit, cart, user, sessionId, quantities}) {
  
    const options = _.range(10)
    const subtotal = 0;

  return (
    <div>
      <h1>Your cart:</h1>
      <div id="cart-container">
        <form onSubmit={handleSubmit}>
        <ul>
          {
            cart.map(item => (
             
              <div key={item.id}>
                <li>{item.face.title}
                  <span title="price" className="price">${item.price}</span>
                   subtotal = subtotal  +item.price
                  <span title="delete" className="del-button" onClick={() => removeItem(item.id)}>Remove item?</span>
                  <legend>Select a quantity:</legend>
                  <div>
                    <select
                      className="quantity"
                      value={quantities.get(item.id)}
                      onChange={(evt) => {handleChange(item.id, evt.target.value)}} >
                      {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </li>
              </div>
            ))
          }
          <div>Subtotal: ${subtotal}</div>
        </ul>
        <button type="submit" className="btn btn-danger">Checkout</button>
        </form>
      </div>
    </div>
  );
}
