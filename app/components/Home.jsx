import React, { Component } from 'react'
import { Link } from 'react-router'
import Faces from './Faces'

export default class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>

                <div className= "text">
                    <h1>Face Shopper</h1>
                    <Faces />
                </div>

            </div>
        )
    }


}
