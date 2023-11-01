import { Link, Route, Routes } from 'react-router-dom'
import { AuthPage, MainPage } from './pages'
import React from 'react'

export const userRoutes = (isLogin) => {
	if (isLogin) {
		return (
			<Routes>
				<React.Fragment>
					<Route path="/" element={MainPage} />
					<Link to="/" />
				</React.Fragment>
			</Routes>
		)
	}

	return (
		<Routes>
			<React.Fragment>
				<Route path="/login" element={AuthPage} />
				<Link to="/" />
			</React.Fragment>
		</Routes>
	)
}
