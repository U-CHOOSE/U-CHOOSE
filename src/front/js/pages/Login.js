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
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h1 className="title_login mx-auto">Acceder</h1>
				</div>
			</div>

			<div className="row ">
				<div className="col-12">
					<div className="form-group mt-5">
						<input
							type="email"
							className="form-control input__email  mx-auto input_login"
							aria-describedby="emailHelp"
							placeholder="Email"
							onChange={event => SetEmail(event.target.value)}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<input
						type="password"
						className="form-control input-pass mt-3 mx-auto input_login"
						id="exampleInputPassword1"
						placeholder="Contraseña"
						onChange={event => SetPassword(event.target.value)}
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<a className="link" href="#">
						¿Olvidaste tu contraseña?
					</a>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<button
						type="submit"
						className=" btn-login"
						onClick={event => {
							event.preventDefault();
							actions.login(email, password);
						}}>
						Iniciar sesión
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
