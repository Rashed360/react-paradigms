import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className='homepage'>
			<ul>
				<li>
					<Link to='recursive-component'>Recursive Component</Link>
				</li>
				<li>
					<Link to='interval-hook'>Set Interval &amp; Hooks</Link>
				</li>
			</ul>
		</div>
	)
}

export default HomePage
