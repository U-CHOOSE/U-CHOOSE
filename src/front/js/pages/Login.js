import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

const Login = () => {
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<div>
			<FontAwesomeIcon icon={faBell} />

			<h1 className="title">Acceder</h1>
			<form>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						onChange={event => SetEmail(event.target.value)}
					/>
				</div>
				<div className="form-input">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						onChange={event => SetPassword(event.target.value)}
					/>
				</div>
				<a className="link" href="#">
					¿Olvidaaste tu contraseña?
				</a>
				<br />

				<button
					type="submit"
					className="btn btn-primary"
					onClick={event => {
						event.preventDefault();
						actions.login(email, password);
					}}>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};

export default Login;
