import React, { Component } from 'react';
import { Link } from "react-router";
import Login from './Login'

// import WhoAmI from './WhoAmI'

export default function Navbar({handleClick}) {
    return (
        <nav className="navbar navbar-inverse   navbar-fixed-top topnav " role="navigation">
            <div className="container topnav">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link id="home" to="/faces">Home</Link></li>
                        <li><Link id="faces" to="/faces">Faces</Link></li>
                        <li><Link id="cart" to="/cart" onClick={handleClick}>Cart</Link></li>
                        <li> <Link id="login" to="/login">Login</Link></li>
                    </ul>
                        
                </div>
            </div>
        </nav>
       
    )
}

