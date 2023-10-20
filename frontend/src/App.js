import './App.scss'
import { Navbar } from './components'
import { AuthPage } from './pages'

export const App = () => {
	return (
		<div className="app">
			<Navbar />
			<AuthPage />
		</div>
	)
}
