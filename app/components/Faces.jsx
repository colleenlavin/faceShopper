import React from 'react'
import {Link} from 'react-router'

export default function Faces({faces, handleClick}) {
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
						<div className="col-md-2 face-item" key={face.id}>

							<Link to={`/faces/${face.id}`}>
								<img className='img-item' src={face.image} />
								<h3>{face.title}</h3>
							</Link>
							<h3>{face.price}</h3>
							<button type="button" className="btn btn-danger" value={face.id} 
								onClick={handleClick}>Add to Cart</button>
						</div>
						))
				}
			</div>
		</div>
		)
}

