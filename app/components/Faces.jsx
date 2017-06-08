import React from 'react'
import {Link} from 'react-router'

export default function Faces(props) {
  const faces = props.faces
  // console.log('state', state)
  // console.log('props', props)
  console.log('faces,' , faces)

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
						<div className="col-md-2 portfolio-item" key={face.id}>
							<Link to={`/faces/${face.id}`}>
								<img className='img-item' src={face.image} />
								<h3>{face.title}</h3>
							</Link>
							<h3>{face.price}</h3>
							<h4>{face.description}</h4>
							<button type="button" className="btn btn-danger">Add to Cart</button>
						</div>
						))
				}
			</div>
		</div>
		)
}
