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
                <span>{face.description}</span>
                <span>${face.price}</span>
                <span>{face.quantity}</span>
            </div>
        </div>
    )
}
