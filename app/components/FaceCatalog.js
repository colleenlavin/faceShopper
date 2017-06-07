import React from 'react';
import {Link} from 'react-router';

export default function FaceCatalog(props) {
	const faces = props.faces

	return (
		<div className='main-container'>
			<div className='title'>
				<h2>
					Face Wall
				</h2>
			</div>
			<div className='box'>
				{
					faces && faces.map(face => (
						<div className='item' key={face.id}>
							<Link to={`/faces/${face.id}`}>
								<img className='img-item' src={face.photoUrl} />
								<h3>{face.title}</h3>
								<h3>{face.price}</h3>
							</Link>
						</div>
						))
				}
			</div>
		</div>
		)
}