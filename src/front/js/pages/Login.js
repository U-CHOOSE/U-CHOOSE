import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const Login = () => {
	const history = useHistory();
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	const { store, actions } = useContext(Context);
	console.log(store.step);

	// const checkingLogged = () => {
	// 	if (actions.isLogged && store.is_student) {
	// 		store.step = 3;
	// 		history.push("/registerformpage");
	// 	}
	// };

	useEffect(
		() => {
			if (actions.isLogged() === true && store.is_student) {
				store.step = 3;
				history.push("/registerformpage");
			}
		},
		[actions.isLogged()]
	);

	useEffect(
		() => {
			if (store.error != "") {
				alert("error");
				actions.setError("");
			}
		},
		[store.error]
	);

	return (
		<div>
			{/* <navbar/> */}
			<Link className="links" to={"/"}>
				<FontAwesomeIcon className="icon-x" icon={faTimes} />
			</Link>

			<h1 className="title_login">Acceder</h1>
			<form>
				<div className="form-group ">
					<input
						type="email"
						className="form-control input__email mt-5"
						aria-describedby="emailHelp"
						placeholder="Email"
						onChange={event => SetEmail(event.target.value)}
					/>
				</div>
				<div className="form-input contain-input2">
					<input
						type="password"
						className="form-control input-pass mt-3"
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
					className=" btn-login"
					onClick={event => {
						event.preventDefault();
						actions.login(email, password);
						checkingLogged;
					}}>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};

export default Login;
