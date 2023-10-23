import React from 'react'
import { Link } from 'react-router-dom'
import './auth-page.scss'

export function AuthPage() {
	return (
		<>
			<div className="container">
				<div className="auth-page">
					<h3>Авторизация</h3>
					<form className="form form-login">
						<div className="row">
							<div className="input-field col s12">
								<input
									id="login"
									type="text"
									name="login"
									className="validate"
								/>
								<label htmlFor="login">Login</label>
							</div>
							<div className="input-field col s12">
								<input
									id="password"
									type="password"
									name="password"
									className="validate"
								/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button className="wawes-effect wawes-light btn green">
								Войти
							</button>

							<Link to="/register" className="btn-outline btn-log">
								Нет аккаунта ?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
