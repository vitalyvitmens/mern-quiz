import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { Navbar } from './components'
import { AuthPage, RegistrationPage } from './pages'

export const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/login" element={<AuthPage />} />
				<Route path="/register" element={<RegistrationPage />} />
			</Routes>
		</div>
	)
}
