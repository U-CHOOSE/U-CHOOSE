import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const Login = () => {
	const history = useHistory();
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			if (store.token != "" && store.token != undefined) {
				history.push("/");
			}
		},
		[store.token]
	);
	// useEffect(
	// 	() => {
	// 		alert("password incorrecto");
	// 	},
	// 	[store.mal]
	// );
	const isCorrect = () => {
		if (store.mal == true) return alert("Password incorrecto");
	};

	return (
		<div>
			{/* <navbar/> */}
			<Link className="links" to={"/"}>
				<FontAwesomeIcon className="icon-x" icon={faTimes} />
			</Link>

			<h1 className="title">Acceder</h1>
			<form>
				<div className="form-group ">
					<input
						type="email"
						className="form-control input-email"
						aria-describedby="emailHelp"
						placeholder="Email"
						onChange={event => SetEmail(event.target.value)}
					/>
				</div>
				<div className="form-input contain-input2">
					<input
						type="password"
						className="form-control input-pass"
						id="exampleInputPassword1"
						placeholder="Contraseña"
						onChange={event => SetPassword(event.target.value)}
					/>
				</div>
				<a className="link" href="#">
					¿Olvidaste tu contraseña?
				</a>
				<br />

				<button
					type="submit"
					className="btn btn-primary btn-login"
					onClick={event => {
						event.preventDefault();
						actions.login(email, password);
						isCorrect();
					}}>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};

export default Login;
