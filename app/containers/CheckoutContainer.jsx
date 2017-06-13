// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Checkout from '../components/Checkout'

// const mapStateToProps = (state) => ({ order: state.order })

// class CheckoutContainer extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       name: '',
//       address1: '',
//       address2: '',
//       city: '',
//       state: '',
//       zip: 0,
//       ccn: 0,
//       expDate: 0,
//       ccv: 0
//     }

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(evt){
//     const value = evt.target.value;
//     if(evt.target.id === 'nameField') {
//       this.setState({
//         name: value
//       })
//     }
//     if(evt.target.id === 'address1Field') {
//       this.setState({
//         address1: value
//       })
//     }
//     if(evt.target.id === 'address2Field') {
//       this.setState({
//         address2: value
//       })
//     }
//     if(evt.target.id === 'cityField') {
//       this.setState({
//         city: value
//       })
//     }
//     if(evt.target.id === 'stateField') {
//       this.setState({
//         state: value
//       })
//     }
//     if(evt.target.id === 'zipField') {
//       this.setState({
//         zip: value
//       })
//     }
//     if(evt.target.id === 'ccnField') {
//       this.setState({
//         ccn: value
//       })
//     }
//     if(evt.target.id === 'expDateField') {
//       this.setState({
//         expDate: value
//       })
//     }
//     if(evt.target.id === 'ccvField') {
//       this.setState({
//         ccv: value
//       })
//     }
//   }

//   handleSubmit(evt) {
//     evt.preventDefault()
//     //console.log("I've been submitted!")
//    // this.setState({update all the things})
//   }
// }


// export default connect(mapStateToProps)(CartContainer);
