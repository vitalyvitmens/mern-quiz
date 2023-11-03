import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { userRoutes } from './routes'
import { AuthContext } from './context'
import { useAuth } from './hooks'
import { useContext, useState } from 'react'
import axios from 'axios'
import './App.scss'
import { AuthPage, MainPage, RegisterPage } from './pages'

export const App = () => {
	const { login, logout, token, userId, isReady } = useAuth()
	const isLogin = !!token
	const routes = userRoutes(isLogin)

	const [form, setForm] = useState({
		login: '',
		password: '',
	})

	// const { login } = useContext(AuthContext)

	const changeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
	}

	const registerHandler = async () => {
		try {
			await axios
				.post(
					'/api/auth/register',
					{ ...form },
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then((response) => login(response.data.token, response.data.userId))
		} catch (error) {
			console.log(error)
		}
	}

	const loginHandler = async () => {
		try {
			await axios
				.post(
					'/api/auth/login',
					{ ...form },
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then((response) => login(response.data.token, response.data.userId))
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<AuthContext.Provider
			value={{ login, logout, token, userId, isReady, isLogin }}
		>
			<div className="app">
				<Navbar />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route
						path="/login"
						element={
							<AuthPage
								changeHandler={changeHandler}
								loginHandler={loginHandler}
							/>
						}
					/>
					<Route
						path="/register"
						element={
							<RegisterPage
								changeHandler={changeHandler}
								registerHandler={registerHandler}
							/>
						}
					/>
				</Routes>
			</div>
		</AuthContext.Provider>
	)
}
