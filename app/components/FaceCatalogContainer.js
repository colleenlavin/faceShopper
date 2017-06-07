import {connect} from 'react-redux'
// import Faces from '../components/Faces'
// import React, {Component} from 'react'
// put me in container folder -- KHAM
const mapStateToProps = (state) => (faces: state.faces.list) // wrap this in object

const FaceCatalogContainer = connect(mapStateToProps)(FaceCatalog);
export default FaceCatalogContainer;
