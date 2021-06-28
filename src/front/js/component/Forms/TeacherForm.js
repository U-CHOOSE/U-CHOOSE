import React, { useState } from "react";
import "./Forms.scss";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

const TeacherForm = props => {
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		linkedin: "",
		typeOfteachers: "",
		password: "",
		repeatPassword: ""
	});
	const [checked, setChecked] = useState(true);

	return (
		<>
			<form>
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
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<input
					type="text"
					placeholder="¿URL Linkedin...?"
					value={formData.typeOfteachers}
					onChange={e => setFormData({ ...formData, typeOfteachers: e.target.value })}
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
				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</span>
				{props.footer}
				<button className="" onClick={() => props.setSteps(steps + 1)}>
					Crear Cuenta
				</button>
				<button className="" onClick="">
					Registro con Linkedin
				</button>
			</form>
			{/* {console.log(checked,formData)} */}
		</>
	);
};
TeacherForm.PropTypes = {
	steps: propTypes.integer,
	setSteps: propTypes.integer
};

export default TeacherForm;
