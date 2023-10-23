import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { Navbar } from './components'
import { AuthPage, RegistrationPage } from './pages'
import { useState } from 'react'
import axios from 'axios'

export const App = () => {
	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () => {
		try {
			await axios.post(
				'/api/auth/register',
				{ ...form },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			).then((response) => console.log(response))
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={<div>Main</div>} />
				<Route
					path="/login"
					element={
						<AuthPage
							changeHandler={changeHandler}
							registerHandler={registerHandler}
						/>
					}
				/>
				<Route
					path="/register"
					element={
						<RegistrationPage
							changeHandler={changeHandler}
							registerHandler={registerHandler}
						/>
					}
				/>
			</Routes>
		</div>
	)
}
