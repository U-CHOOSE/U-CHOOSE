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
		is_student: false
	});

	const [checked, setChecked] = useState(true);

	return (
		<>
			<div>
				<div>
					<h1 className="violet_h1_forms">Detalles de cuenta</h1>
				</div>
				<input
					className="mx-auto w-100 "
					type="text"
					placeholder="Nombre completo"
					value={formData.fullname}
					onChange={e => setFormData({ ...formData, fullname: e.target.value })}
				/>
				<br />
				<span>Podras ocultarlo en tus reviews</span>
				<br />

				<input
					className=" margin: 13px 12px 12px 10px w-100 "
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>

				<input
					className=" w-100 "
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>

				<input
					className=" w-100 "
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>

				<pre-wrap>
					<input className="paddi" type="checkbox" onChange={e => setChecked(e.target.checked)} />
					Acepto los términos y condiciones
				</pre-wrap>

				<pre-wrap>
					<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</pre-wrap>

				{props.footer}

				<button className="button_violet_great" onClick={() => actions.setUpStep()}>
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
