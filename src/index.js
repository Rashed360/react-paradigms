import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'app/store'
import 'styles/globals.css'
import App from 'routes/_App'

const root = ReactDOM.createRoot(document.getElementById('react'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
