import React from 'react'
import {Link} from 'react-router'

export default function Faces(props) {
  const faces = props.faces

  return (
		<div className='main-container'>
			<div className='title'>

				<h1 className='page-header'>
					Face Wall
				</h1>
			</div>
			<div className="row" >
				{
					faces && faces.map(face => (
						<div className="col-md-3 face-item" key={face.id}>

							<Link to={`/faces/${face.id}`}>
								<h3>{face.title}</h3>
								<img className='img-item' src={face.image} />
							</Link>
							<h3>{face.price}</h3>
							<button type="button" className="btn btn-danger">Add to Cart</button>
						</div>
						))
				}
			</div>
		</div>
		)
}
