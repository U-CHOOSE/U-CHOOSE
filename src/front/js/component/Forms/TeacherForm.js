import React, { useState, useContext } from "react";
import "./Forms.scss";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { Context } from "../../store/appContext";

const TeacherForm = props => {
	const { store, actions } = useContext(Context);

	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		linkedin: "",
		typeOfteachers: "",
		password: "",
		repeatPassword: "",
		is_student: false
	});
	const [checked, setChecked] = useState(true);

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
				<br />
				<span>Podras ocultarlo en tus reviews</span>
				<br />
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
				<br />
				<span>Acepto los terminos y condiciones</span>
				<br />
				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</span>
				{props.footer}
				<button className="" onClick={() => actions.setUpStep()}>
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
