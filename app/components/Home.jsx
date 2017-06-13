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
                <div className="col-md-6 " >
                    <Link to={`/faces`}>
                        <img className='img-item' src='./public/men' />
                    </Link>
                </div>

                <div className="col-md-3 " >
                    <Link to={`/faces`}>
                        <img className='img-item' src='./public/woman' />
                    </Link>
                </div>
            </div>
        )
    }


}
