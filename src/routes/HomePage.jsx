import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className='homepage'>
			<ul>
				<li>
					<Link to='recursive-component'>Recursive Component</Link>
				</li>
			</ul>
		</div>
	)
}

export default HomePage
