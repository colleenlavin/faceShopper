import React, { Component } from 'react'
import { connect } from 'react-redux'
import Checkout from '../components/Checkout'

const mapStateToProps = (state) => ({ order: state.order })
const mapDispatchToProps = (dispatch) => {
    return {
        postOrder: 
        (data) => {
            dispatch(postCartItem(data))
        }
    }
}

class CheckoutContainer extends Component {
  constructor(props) {
    super(props)

    let fields =  [['First Name', 'first'], ['Last Name', 'last'], 
    ['Address Line 1', 'address1'], ['Address Line 2', 'address2'], ['City', 'city'], ['State', 'state'], 
    ['Zip Code', 'zip'], ['Credit Card Number', 'ccn'], ['Expiration Date', 'exp'], 
    ['Three Digit Verification Code'], ['cvc']]

    this.state.data = {data: {}, fields: fields}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state.fields =  [['First Name', 'first'], ['Last Name', 'last'], 
    ['Address Line 1', 'address1'], ['Address Line 2', 'address2'], ['City', 'city'], ['State', 'state'], 
    ['Zip Code', 'zip'], ['Credit Card Number', 'ccn'], ['Expiration Date', 'exp'], 
    ['Three Digit Verification Code'], ['cvc']]
  }

  handleChange(evt){
    const value = evt.target.value;
    let data = this.state.data
    data[evt.target.id] = evt.target.value
    this.setState({data: data})
  }

  handleSubmit(data, evt) {
    evt.preventDefault()
    postOrder(data)
    this.setState({data: {}})
  }

  render() {
        return (
            <Checkout {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} fields={this.state.fields} />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);