import React from 'react'
import { Link } from 'react-router'

export default function Face({ face }) {

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

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

            <button type="button" className="btn btn-danger" value={face.id}
                onClick={handleClick}>Add to Cart</button>
        </div>
    )
}
