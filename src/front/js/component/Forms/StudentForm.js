import React, { useState, useContext, useEffect } from "react";
import "./Forms.scss";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";
import { propTypes } from "react-bootstrap/esm/Image";

const StudentForm = props => {
	const { store, actions } = useContext(Context);
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		password: "",
		repeatPassword: ""
	});
	const [checked, setChecked] = useState(true);

	return (
		<>
			<div>
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
					Registro con Google
				</button>
			</div>
			{/* {console.log(checked,formData)} () => setSteps(steps + 1) */}
		</>
	);
};
StudentForm.PropTypes = {
	steps: propTypes.integer,
	setSteps: propTypes.integer
};

export default StudentForm;
