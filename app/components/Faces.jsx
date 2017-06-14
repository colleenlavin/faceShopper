import React from 'react'
import { Link } from 'react-router'


export default function Faces({faces, handleClick, deleteOne}) {
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
								<h3>{face.title}</h3>
								<img className='img-item' src={face.image} />
							</Link>
							<h3>{face.price}</h3>
							<button type="button" className="btn btn-danger" value={face.id}
								onClick={handleClick}>Add to Cart</button>
							<button type="button" className="btn btn-delete" value={face.id}
								onClick={() =>deleteOne(face.id)}>Delete</button>

						</div>
					))
				}
			</div>
			<hr />
			<Link className='btn btn-success' to='/new-face'>
				<span className='glyphicon glyphicon-plus' />Add A New Face
			</Link>
		</div>
	)
}

