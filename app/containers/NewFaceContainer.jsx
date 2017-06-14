import React, {Component} from 'react'
import NewFace from '../components/NewFace'
import {connect} from 'react-redux'
import {addNewFace} from '../reducers/faces'

const mapStateToProps = (state) => {
  return {
    faces: state.faces.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOne(faceTitle, faceImage, faceDescription, facePrice, faceQuantity){
      dispatch(addNewFace(faceTitle, faceImage, faceDescription, facePrice, faceQuantity))
    }
  }
}

class NewFaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description:'',
      price: '',
      quantity: '',
      dirty: false
    };
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.imageHandleChange = this.imageHandleChange.bind(this);
    this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
    this.priceHandleChange = this.priceHandleChange.bind(this);
    this.quantityHandleChange = this.quantityHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  titleHandleChange(evt) {
    evt.preventDefault();
    let title = evt.target.value;
    this.setState({
      title: title,
      dirty: true
    })
  }

  imageHandleChange(evt) {
    evt.preventDefault();
    let image = evt.target.value;
    this.setState({
      image: image,
      dirty: true
    })
  }

  descriptionHandleChange(evt) {
    evt.preventDefault();
    let description = evt.target.value;
    console.log(description);
    this.setState({
      description: description,
      dirty: true
    })
  }

  priceHandleChange(evt) {
    evt.preventDefault();
    let price = evt.target.value;
    this.setState({
      price: price,
      dirty: true
    })
  }

  quantityHandleChange(evt) {
    evt.preventDefault();
    let quantity = evt.target.value;
    this.setState({
      quantity: quantity,
      dirty: true
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addOne(this.state.title, this.state.image, this.state.description, this.state.price, this.state.quantity);
    this.setState({
      title: '',
      image: '',
      description:'',
      price: '',
      quantity: '',
      dirty: false
    })
  }

  render () {
  let title = this.state.title;
  let image = this.state.image;
  let description = this.state.description;
  let price = this.state.price;
  let quantity = this.state.quantity;
  let dirty = this.state.dirty;
  let faces = this.props.faces;

  return (
    <NewFace
      titleHandleChange = {this.titleHandleChange}
      imageHandleChange = {this.imageHandleChange}
      descriptionHandleChange = {this.descriptionHandleChange}
      priceHandleChange = {this.priceHandleChange}
      quantityHandleChange = {this.quantityHandleChange}
      handleSubmit = {this.handleSubmit}
      title = {title}
      image = {image}
      description = {description}
      price = {price}
      quantity = {quantity}
      faces = {faces}
      formTitle = 'Add Face (Plz do not if yr not an admin?!)'
      />
    )
}

}

export default connect(mapStateToProps, mapDispatchToProps)(NewFaceContainer)


