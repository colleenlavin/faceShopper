import {connect} from 'react-redux';
import Faces from '../components/Faces';
// import React, {Component} from 'react'



const mapStateToProps = (state) => {
	return {
		faces: state.faces.list
	}
};

const FaceCatalogContainer = connect(mapStateToProps)(FaceCatalog);
export default FaceCatalogContainer;
