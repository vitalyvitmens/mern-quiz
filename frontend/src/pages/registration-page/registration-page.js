import React from 'react'
import { Link } from 'react-router-dom'
import './registration-page.scss'

export function RegistrationPage() {
	return (
		<>
			<div className="container">
				<div className="registration-page">
					<h3>Регистрация</h3>
					<form className="form form-login">
						<div className="row">
							<div className="input-field col s12">
								<input type="text" name="login" className="validate" />
								<label htmlFor="login">Login</label>
							</div>
							<div className="input-field col s12">
								<input type="password" name="password" className="validate" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button className="wawes-effect wawes-light btn green">
								Регистрация
							</button>

							<Link to="/login" className="btn-outline btn-reg">
								Уже есть аккаунт ?
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
