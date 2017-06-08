import React, { Component } from 'react';
import { Link } from "react-router";
import Login from './Login'
// import WhoAmI from './WhoAmI'

export default function Navbar() {
    return (
        <nav className="navbar navbar-inverse   navbar-fixed-top topnav " role="navigation">
            <div className="container topnav">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link id="home" to="/home">Home</Link></li>
                        <li><Link id="faces" to="/faces">Faces</Link></li>
                    </ul>
                    <div className="nav navbar-nav navbar-left">
                        <Link id="login" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
       
    )
}

