import { Link } from 'react-router-dom'
import './register-page.scss'

export const RegisterPage = ({ changeHandler, registerHandler, form }) => {
	return (
		<div className="container">
			<div className="register-page">
				<h3>Регистрация</h3>
				<form className="form form-login" onSubmit={(e) => e.preventDefault()}>
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
							disabled={!form.login || !form.password}
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
	)
}
