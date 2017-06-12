import React, {Component} from 'react'
import {Link} from 'react-router'

export default function Confirmation() {
  // do we want a full page for this or just a modal? -amkh
  return (
      <div className='main-container'>
        <div className='title'>
          <h1 className='page-header'>
            Thank you for your order!
          </h1>
        </div>
        <div className="row" >
          <h3>Click <Link to={`/faces`}><h3>here</h3></Link> to own more faces!</h3>
        </div>
      </div>
    )
}
