import React from 'react'
import { Error } from '../../components'
import './main-page.scss'

export const MainPage = () => {
	return (
		<>
			<div className="mb-8 text-xl text-uppercase md:text-center text-red-500">
				<Error />
			</div>
			<div>
				<h1>MainPage</h1>
			</div>
		</>
	)
}
