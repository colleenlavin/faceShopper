import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from "react-router";

export default function Cart({handleChange, handleSubmit, cart, user, sessionId, quantities}) {
  
    const options = _.range(10)

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
        </ul>
        <Link to={`/checkout`}>
        <button type="submit" className="btn btn-danger">Checkout</button>
         </Link>
        </form>
      </div>
    </div>
  );
}
