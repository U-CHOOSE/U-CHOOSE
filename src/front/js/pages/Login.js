import React, { useState } from "react";

const Login = () => {
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	function login() {
		fetch("", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log(responseJson);
				// history.push("/LandingPage");
				// o buscar profesor
			});
	}

	return (
		<div>
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
						onChange={event => SetEmail(event.target.value)}
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
						login();
					}}>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};

export default Login;
