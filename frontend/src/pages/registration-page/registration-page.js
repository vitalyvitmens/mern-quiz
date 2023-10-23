import React from 'react'
import { Link } from 'react-router-dom'
import './registration-page.scss'

export function RegistrationPage({ changeHandler, registerHandler }) {
	return (
		<>
			<div className="container">
				<div className="registration-page">
					<h3>Регистрация</h3>
					<form
						className="form form-login"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="row">
							<div className="input-field col s12">
								<input
									id="login"
									type="text"
									name="login"
									className="validate"
									onChange={changeHandler}
								/>
								<label htmlFor="login">Login</label>
							</div>
							<div className="input-field col s12">
								<input
									id="password"
									type="password"
									name="password"
									className="validate"
									onChange={changeHandler}
								/>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button
								className="wawes-effect wawes-light btn green"
								onClick={registerHandler}
							>
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
