import { Link } from 'react-router-dom'

export const Error = ({ error }) =>
	error && (
		<div className='d-flex flex-col items-center text-sm/[18px]'>
			<h2>{error}</h2>
			<div className="error"></div>
			<Link className="to-main" to="/">
				НА ГЛАВНУЮ
			</Link>
		</div>
	)
