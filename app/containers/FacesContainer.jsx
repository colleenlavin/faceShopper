import {connect} from 'react-redux'
import Faces from '../components/Faces'
// import React, {Component} from 'react'

const mapStateToProps = (state) => ({faces: state.faces.list})

const FacesContainer = connect(mapStateToProps)(Faces);
export default FacesContainer;
