import React from 'react'
import { Link } from 'react-router'

export default function Face({face}) {

    return (
        <div className='main-container'>
            <div className='title'>
                <h2>
                    {face.title}
                </h2>
            </div>
            <div>
                <img className='img-item' src={face.image} />
            </div>
            <div>
                <div>{face.description}</div>
                <div>${face.price}</div>
                <div>{face.quantity}</div>
            </div>
        </div>
    )
}
