import React, {Component} from 'react'
import {Link} from 'react-router'

export default function Checkout(props){
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
}