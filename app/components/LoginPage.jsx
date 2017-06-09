import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import store from '../store'
import { Link } from 'react-router'
import Login from './Login'

export default class LoginPage extends Component {

    render() {
        return (
            <div className="container" >
                <div className="omb_login">
                    <h3 className="omb_authTitle">Login </h3>
                    <div className="row omb_row-sm-offset-3 omb_socialButtons">
                        <div className="col-xs-4 col-sm-2">
                            <a href="/api/auth/login/facebook" className="btn btn-lg btn-block omb_btn-facebook">
                                <i className="fa fa-facebook visible-xs"></i>
                                <span className="hidden-xs">Facebook</span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-2">
                            <a href="/api/auth/login/github" className="btn btn-lg btn-block omb_btn-twitter">
                                <i className="fa fa-github visible-xs"></i>
                                <span className="hidden-xs">Github</span>
                            </a>
                        </div>
                        <div className="col-xs-4 col-sm-2">
                            <a href="/api/auth/login/google" className="btn btn-lg btn-block omb_btn-google">
                                <i className="fa fa-google visible-xs"></i>
                                <span className="hidden-xs">Google</span>
                            </a>
                        </div>
                    </div>
                    <div className="row omb_row-sm-offset-3 omb_loginOr">
                        <div className="col-xs-12 col-sm-6">
                                <span className="omb_spanOr">or</span>
                        </div>
                    </div>
                    <div className="row omb_row-sm-offset-3">
                        <div className="col-xs-12 col-sm-6">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}