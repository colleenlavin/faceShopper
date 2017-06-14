import React, { Component } from 'react'
import { connect } from 'react-redux'
import Checkout from '../components/Checkout'

const mapStateToProps = (state) => ({ order: state.order })
const mapDispatchToProps = (dispatch) => {
    return {
        postOrder: 
        (data) => {
            dispatch(postOrder(data))
        }
    }
}

class CheckoutContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {data: {}}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(evt){
    let value = evt.target.value;
    let data = this.state.data
    data[evt.target.id] = evt.target.value
    this.setState({data: data})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    postOrder(this.state.data)
    this.setState({data: {}})
  }

  render() {
        return (
            <Checkout {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} fields={this.state.fields} />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);