import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

const Login = () => {
	const history = useHistory();
	const [email, SetEmail] = useState("");
	const [password, SetPassword] = useState("");
	const { store, actions } = useContext(Context);
	const [changeIcon, setChangeIcon] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
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
						type={showPassword ? "password" : "text"}
						className="form-control input_login mt-3 mx-auto"
						id="exampleInputPassword1"
						placeholder="  Contraseña  "
						onChange={event => SetPassword(event.target.value)}
					/>
					<div className="col-12 mx-auto ">
						<i
							className={changeIcon ? "fas fa-eye " : "far fa-eye-slash "}
							onClick={() => {
								setShowPassword(!showPassword);
								setChangeIcon(!changeIcon);
							}}
						/>
					</div>
				</div>
			</div>
			<button
				type="submit"
				className=" btn-login"
				onClick={event => {
					event.preventDefault();
					actions.login(email, password, history);
					// checkingLogged;
				}}>
				Iniciar sesión
			</button>
		</div>
	);
};

export default Login;
