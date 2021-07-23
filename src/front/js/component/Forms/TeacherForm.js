import React, { useState, useContext, useEffect } from "react";
import "./Forms.scss";
import { Context } from "../../store/appContext";

const TeacherForm = props => {
	const { store, actions } = useContext(Context);

	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		linkedin: "",
		typeOfteachers: "",
		_password: "",
		repeatPassword: "",
		promo: false,
		is_student: false
	});
	const [checked, setChecked] = useState(true);

	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password,
		promo: formData.promo,
		is_student: formData.is_student,
		type_of_teacher: formData.typeOfteachers,
		linkedin: formData.linkedin
	};

	const handleCreate = () => {
		const options = {
			method: "POST",
			headers: {
				mode: "no-cors",
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		};

		fetch(process.env.BACKEND_URL + "/user", options)
			.then(res => {
				if (res.status === 201) {
					alert("ok");
					actions.setUpStep();
				} else {
					alert("failed to fetch");
				}
				console.log(status);
				return res.json();
			})
			.then(json => console.log(json))
			.catch(error => console.log(error));
	};

	return (
		<>
			<div>
				<div>
					{" "}
					<h1>Detalles de cuenta</h1>
				</div>
				<input
					type="text"
					placeholder="Nombre completo"
					value={formData.fullname}
					onChange={e => setFormData({ ...formData, fullname: e.target.value })}
				/>
				<span>Podras ocultarlo en tus reviews</span>
				<input
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<input
					type="text"
					placeholder="¿De qué eres profesor?"
					value={formData.typeOfteachers}
					onChange={e => setFormData({ ...formData, typeOfteachers: e.target.value })}
				/>
				<input
					type="text"
					placeholder="¿URL Linkedin...?"
					value={formData.linkedin}
					onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Contraseña"
					value={formData._password}
					onChange={e => setFormData({ ...formData, _password: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>

				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<span>Acepto los términso y condiciones</span>
				<input type="checkbox" onChange={e => setFormData({ ...formData, promo: e.target.checked })} />
				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</span>
				{props.footer}
				<button className="" onClick={handleCreate}>
					Crear Cuenta
				</button>
				<button className="" onClick={() => actions.setUpStep()}>
					Registro con Linkedin
				</button>
			</div>
		</>
	);
};

export default TeacherForm;
