import React, {Component} from 'react'
import EditFace from '../components/EditFace'
import {connect} from 'react-redux'
import {updateFace} from '../reducers/faces'

const mapStateToProps = (state) => {
  return {
    face: state.faces.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEdits(id, data){
      dispatch(updateFace(id, data))
    }
  }
}

class NewFaceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      image: '',
      description: '',
      price: 0,
      quantity: 0,
      dirty: false
    };
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.imageHandleChange = this.imageHandleChange.bind(this);
    this.descriptionHandleChange = this.descriptionHandleChange.bind(this);
    this.priceHandleChange = this.priceHandleChange.bind(this);
    this.quantityHandleChange = this.quantityHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  componentWillReceiveProps (newProps, oldProps) {
        this.setState({
          title: newProps.face.title,
          image: newProps.face.image,
          description: newProps.face.description,
          price: newProps.face.price,
          quantity: newProps.face.quantity
        });
    }

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
    let data = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity
    }
    this.props.dispatchEdits(this.props.face.id, data);
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
    <EditFace
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
      formTitle = "Edit This Face (don't if yr not an admin!!!!)"
      />
    )
}

}

export default connect(mapStateToProps, mapDispatchToProps)(NewFaceContainer)


