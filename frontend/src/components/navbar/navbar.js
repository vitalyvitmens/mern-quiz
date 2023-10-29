import React, { useContext } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'

export function Navbar() {
	const { logout, isLogin } = useContext(AuthContext)
	return (
		<nav>
			<div className="nav-wrapper navbar green">
				<Link to="/" className="brand-logo">
					Qize
				</Link>
				{isLogin ? (
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/" onClick={logout}>
								Выйти
							</Link>
						</li>
					</ul>
				) : (
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<Link to="/">Войти</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	)
}
