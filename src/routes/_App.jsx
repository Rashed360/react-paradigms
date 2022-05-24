import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import RecursiveComponent from './RecursiveComponent'

const App = () => {
	return (
		<Routes>
			<Route path='' element={<HomePage />} />
			<Route path='recursive-component' element={<RecursiveComponent />} />
		</Routes>
	)
}

export default App
