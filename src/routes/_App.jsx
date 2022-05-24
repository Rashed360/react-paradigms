import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import RecursiveComponent from './RecursiveComponent'
import SetIntervalandHook from './SetIntervalandHook'

const App = () => {
	return (
		<Routes>
			<Route path='' element={<HomePage />} />
			<Route path='recursive-component' element={<RecursiveComponent />} />
			<Route path='interval-hook' element={<SetIntervalandHook />} />
		</Routes>
	)
}

export default App
