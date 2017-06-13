import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'


export default function Checkout(props) {
    const handleChange = props.handleChange;
    const handleSubmit = props.handleSubmit;
    /* This function assumes that the props will have the following things available:
            - Payment (an array of objects representing payment info)
                - each item should have:
                    - creditCard/others
                    - creditCardType
                    - creditCardNumber
                    -creditCardHolderName
                    - creditCardCVCcode
                    -creditCardExpirationDate
             - Address (an array of objects representing mailing info)
                - each item should have:
                    - address
                    - city
                    - sate
                    - zipCode
            - handleSubmit(for payment info and for address) and handleChange need to be mapped in as well from container for editing quantity
      */
    return (
        <div className="form-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <legend>Select a quantity:</legend>
                <div>

                </div>
            </form>
            < Link to={`/confirm`}>
                <button type="submit" className="btn btn-danger">
                    Place Order</button>
            </Link >
        </div>
    )

}