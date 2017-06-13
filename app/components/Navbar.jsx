import React, { Component } from 'react';
import { Link } from "react-router";
import Login from './Login'
// import WhoAmI from './WhoAmI'

export default function Navbar() {
    return (
        <nav className="navbar navbar-inverse   navbar-fixed-top topnav " role="navigation">
            <div className="container topnav">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="nav navbar-nav navbar-left">
                        <a><Link id="home" to="/home">Home</Link></a>
                        <a><Link id="faces" to="/faces">Faces</Link></a>
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <a><Link id="login" to="/login">Login</Link></a>
                    </div>
                </div>
            </div>
        </nav>
       
    )
}

