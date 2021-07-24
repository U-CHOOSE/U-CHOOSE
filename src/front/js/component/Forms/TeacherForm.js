import React, { useState, useContext } from "react";
import "./Forms.scss";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import { Context } from "../../store/appContext";
import { AiFillLinkedin } from "react-icons/ai";
import Linkedin from "../../../img/Linkedin.png";

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
					<h1 className="violet_h1_forms">Detalles de cuenta</h1>
				</div>
				<input
					className="mx-auto w-100"
					type="text"
					placeholder="Nombre completo"
					value={formData.fullname}
					onChange={e => setFormData({ ...formData, fullname: e.target.value })}
				/>
				<br />
				<span>Podras ocultarlo en tus reviews</span>
				<br />
				<input
					className="mx-auto w-100"
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<input
					className="mx-auto w-100"
					type="text"
					placeholder="¿De qué eres profesor?"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<input
					className="mx-auto w-100"
					type="text"
					placeholder="¿URL Linkedin...?"
					value={formData.typeOfteachers}
					onChange={e => setFormData({ ...formData, typeOfteachers: e.target.value })}
				/>
				<input
					className="mx-auto w-100"
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<input
					className="mx-auto w-100"
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>

				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />

				<span>Acepto los terminos y condiciones</span>
				<br />
				<input className="check" type="checkbox" onChange={e => setChecked(e.target.checked)} />

				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferentes centros
				</span>
				<br />
				{props.footer}

				<button className="button_violet_great" onClick={() => actions.setUpStep()}>
					Crear Cuenta
				</button>
				<br />
				<button className="button_white_border_violet_great" onClick={() => actions.setUpStep()}>
					Registro con <img className="Linkedin " src={Linkedin} />
				</button>
			</div>
		</>
	);
};

export default TeacherForm;
