import React from 'react'
import './navbar.scss'

export function Navbar() {
	return (
		<nav>
			<div className="nav-wrapper navbar green">
				<a href="/" className="brand-logo">
					Qize
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="/">Войти</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
