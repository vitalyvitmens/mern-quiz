import React from 'react'
// import { Link } from 'react-router-dom'
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
								<input type="email" name="email" className="validate" />
								<label htmlFor="email">Email</label>
							</div>
							<div className="input-field col s12">
								<input type="password" name="password" className="validate" />
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<button className="wawes-effect wawes-light btn green">
								Войти
							</button>

							<a href="/" className="btn-outline btn-reg">
								Нет аккаунта ?
							</a>
						</div>
					</form>
					<h3>Регистрация</h3>
					<form className="form form-login">
						<div className="row">
							<div className="input-field col s12">
								<input type="email" name="email" className="validate" />
								<label htmlFor="email">Email</label>
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

							<a href="/" className="btn-outline btn-reg">
								Уже есть аккаунта ?
							</a>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
