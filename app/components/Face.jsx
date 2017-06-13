import React from 'react'
import { Link } from 'react-router'

export default function Face(props) {
    const selectedFace = props.face

    return (
        <div className='main-container'>
            <div className='title'>
                <h2>
                    {selectedFace.title}
                </h2>
            </div>
            <div>
                <img className='img-item' src={selectedFace.image} />
            </div>
            <div>
                <span>{selectedFace.description}</span>
                <div>${selectedFace.price}</div>
            </div>
        </div>
    )
}
