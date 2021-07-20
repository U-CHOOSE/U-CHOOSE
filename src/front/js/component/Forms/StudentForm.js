import React, { useState, useContext, useEffect } from "react";
import "./Forms.scss";
import { Context } from "../../store/appContext";

const StudentForm = props => {
	const { store, actions } = useContext(Context);
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
		repeatPassword: "",
		promo: null,
		is_student: false
	});
	const body = {
		fullname: formData.location,
		email: formData.email,
		_password: formData.password,
		promo: formData.promo,
		is_student: formData.is_student
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

		fetch("https://3001-silver-swan-5bf5up29.ws-eu11.gitpod.io/api/user", options)
			.then(res => res.json())
			.then(json => setFormData(json))
			.catch(error => console.log(error));
	};
	return (
		<>
			<div>
				<div>
					<h1 className="violet_h1_forms">Detalles de cuenta</h1>
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
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<input
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>

				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<span>Acepto los términso y condiciones</span>
				<input type="checkbox" onChange={e => setFormData({ ...formData, promo: e.target.value })} />
				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</span>
				{console.log(formData)}
				{props.footer}
				<button className="button_violet_great" onClick={handleCreate}>
					Crear Cuenta
				</button>
				<button className="button_white_border_violet_great" onClick={() => actions.setUpStep()}>
					Registro con Google
				</button>
			</div>
		</>
	);
};

export default StudentForm;
