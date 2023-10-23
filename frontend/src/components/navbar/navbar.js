import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export function Navbar() {
	return (
		<nav>
			<div className="nav-wrapper navbar green">
				<Link to="/" className="brand-logo">
					Qize
				</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<Link to="/login">Войти</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
