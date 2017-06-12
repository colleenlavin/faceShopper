import React, { Component } from 'react'
import _ from 'lodash'

export default function Cart({handleChange, handleSubmit, cart, userId, sessionId}) {
  
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
                  <span title="price" className="price">${item.price}</span>
                  <span title="delete" className="del-button" onClick={() => removeItem(item.id)}>Remove item?</span>
                  <legend>Select a quantity:</legend>
                  <div>
                    <select
                      className="quantity"
                      value={item.quantity}
                      onChange={(evt) => {handleChange(item, evt.target.value)}} >
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
        <button type="submit" className="btn btn-danger">Checkout</button>
        </form>
      </div>
    </div>
  );
}
