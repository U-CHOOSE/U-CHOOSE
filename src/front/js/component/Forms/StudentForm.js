import React, { useState, useContext, useEffect } from "react";
import "./Forms.scss";
import { Context } from "../../store/appContext";
import google from "../../../../../docs/assets/img/google.png";
import validateEmail from "../Utils";
const StudentForm = props => {
	const { store, actions } = useContext(Context);
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		_password: "",
		repeatPassword: "",
		promo: false,
		is_student: true,
		sign_completed: false
	});
	const [errorStyle, setErrorStyle] = useState({
		email: "errorInvisible",
		_password: "errorInvisible"
	});

	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password,
		promo: formData.promo,
		is_student: formData.is_student,
		sign_completed: formData.sign_completed
	};
	const [checked, setChecked] = useState(true);

	const handleCreate = () => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		};
		const validation = {
			email: validateEmail(formData.email) ? "errorInvisible" : "errorVisible",
			_password: formData._password.length > 5 ? "errorInvisible" : "errorVisible"
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
					// console.log(status);
					return res.json();
				})
				.then(json => {
					localStorage.setItem("id_user", json.body.user_id);
					localStorage.setItem("email", json.body.email);
					localStorage.setItem("password", json.body._password);
				});
		}

		// .catch(error => console.log(error));
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
				{/* <span className={errorStyle.full_name} /> */}
				<span>Podras ocultarlo en tus reviews</span>

				<input
					className="mx-auto w-100  m-3 p-3"
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<span className={errorStyle.email}>Invalid email</span>

				<input
					className="mx-auto w-100  m-3 p-3"
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, _password: e.target.value })}
				/>
				<span className={errorStyle._password}>Invalid password</span>
				<input
					className="mx-auto w-100  m-3 p-3"
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>

				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />

				<span>Acepto los terminos y condiciones</span>
				<br />
				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />

				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferentes centros
				</span>
				<br />

				{props.footer}
				<br />
				<button className="button_violet_great b_cuenta mx-auto " onClick={handleCreate}>
					Crear Cuenta
				</button>

				<button className="button_white_border_violet_great b_Google mt-2 " onClick={handleCreate}>
					Registro con <img className="google" src={google} />
				</button>
			</div>
		</>
	);
};

export default StudentForm;
