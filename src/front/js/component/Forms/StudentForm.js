import React, { useState, useContext, useEffect } from "react";
import "./Forms.scss";
import { Context } from "../../store/appContext";
import google from "../../../../../docs/assets/img/google.png";
import validateEmail from "../../utils/validateEmail";
import validationPassword from "../../utils/validatePassword";
import GoogleLogin from "react-google-login";

const StudentForm = props => {
	const { actions } = useContext(Context);
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		_password: "",
		repeatPassword: "",
		promo: false,
		is_student: true,
		sign_completed: false
	});
	const responseGoogle = responseGoogle => {
		console.log("responsegoogle", responseGoogle);
	};
	const [showPassword, setShowPassword] = useState(false);
	const [showRepeatPassword, setRepeatShowPassword] = useState(false);
	const [changeIcon, setChangeIcon] = useState(true);
	const [changeRepeatIcon, setRepeatChangeIcon] = useState(true);

	const [errorStyle, setErrorStyle] = useState({
		full_name: "errorInvisible",
		email: "errorInvisible",
		_password: "errorInvisible",
		repeat_password: "errorInvisible"
	});
	const [legalStyle, setLegalStyle] = useState("invisible");

	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password,
		promo: formData.promo,
		is_student: formData.is_student,
		sign_completed: formData.sign_completed
	};
	const [legal, setLegal] = useState(false);
	const [checked, setChecked] = useState(false);
	const handleCreate = () => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		};
		const validation = {
			full_name: formData.fullname.length > 5 ? "errorInvisible" : "errorVisible",
			email: validateEmail(formData.email) ? "errorInvisible" : "errorVisible",
			_password: formData._password.length > 5 ? "errorInvisible" : "errorVisible",
			repeat_password: formData.repeatPassword !== formData._password ? "errorInvisible" : "errorVisible",
			legalStyle: legal === undefined ? "invisible" : "visible"
		};
		setErrorStyle(validation);
		if (!Object.values(validation).find(value => value === "errorVisible")) {
			fetch(process.env.BACKEND_URL + "/user", options)
				.then(res => {
					if (res.status === 201) {
						alert("ok");
						actions.setUpStep();
					} else {
						alert("failed to fetch");
					}
					return res.json();
				})
				.then(json => {
					localStorage.setItem("id_user", json.body.user_id);
					localStorage.setItem("email", json.body.email);
					localStorage.setItem("password", json.body._password);
				});
		}
	};
	return (
		<>
			<div>
				<div>
					<h1 className="violet_h1_forms mx-auto">Detalles de cuenta</h1>
				</div>
				<input
					className="mx-auto w-100  m-3 p-3"
					type="text"
					placeholder="Nombre completo"
					value={formData.fullname}
					onChange={e => setFormData({ ...formData, fullname: e.target.value })}
				/>
				{errorStyle.full_name ? (
					<span className={errorStyle.full_name}>Tu nombre debe tener más de 5 carácteres</span>
				) : (
					<span>Podras ocultarlo en tus reviews</span>
				)}

				<input
					className="mx-auto w-100  m-3 p-3"
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<span className={errorStyle.email}>Este email no es valido</span>

				<input
					className="mx-auto w-100  m-3 p-3"
					type={showPassword ? "password" : "text"}
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, _password: e.target.value })}
				/>
				<i
					className={changeIcon ? "fas fa-eye" : "far fa-eye-slash"}
					onClick={() => {
						setShowPassword(!showPassword);
						setChangeIcon(!changeIcon);
					}}
				/>

				<span className={errorStyle._password}>Invalid password</span>
				<input
					className="mx-auto w-100  m-3 p-3"
					type={showRepeatPassword ? "password" : "text"}
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>
				{changeRepeatIcon ? (
					<i
						className="fas fa-eye"
						onClick={() => {
							setRepeatShowPassword(!showRepeatPassword);
							setRepeatChangeIcon(!changeRepeatIcon);
						}}
					/>
				) : (
					<i
						className="far fa-eye-slash"
						onClick={() => {
							setRepeatShowPassword(!showRepeatPassword);
							setRepeatChangeIcon(!changeRepeatIcon);
						}}
					/>
				)}

				<span className={errorStyle.repeat_password}>Las contraseñas no coinciden</span>
				<div className="checkboxes">
					<input type="checkbox" onChange={() => setLegal(!legal)} />
					<span>Acepto los terminos y condiciones</span>
					<br />
					<input type="checkbox" onChange={() => setChecked(!checked)} />
					<span>
						Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con
						información de diferentes centros
					</span>
				</div>
				<br />
				{props.footer}
				<br />
				<button className="button_violet_great b_cuenta mx-auto " onClick={handleCreate}>
					Crear Cuenta
				</button>
				<GoogleLogin
					clientId="509130701685-p3n58k0ibue49e8h6lo9c1vr4qkpg8sk.apps.googleusercontent.com"
					buttonText="Login"
					render={renderProps => (
						<button
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
							className="button_white_border_violet_great b_Google mt-2 ">
							Registro con <img className="google" src={google} />
						</button>
					)}
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={"single_host_origin"}
				/>
			</div>
		</>
	);
};

export default StudentForm;
