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
					className="w-100"
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
				<br />
				<input
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={e => setFormData({ ...formData, password: e.target.value })}
				/>
				<br />
				<input
					type="password"
					placeholder="Repetir contraseña"
					value={formData.repeat}
					onChange={e => setFormData({ ...formData, repeat: e.target.value })}
				/>
				<br />
				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<br />
				<span>Acepto los términso y condiciones</span>
				<br />
				<input type="checkbox" onChange={e => setChecked(e.target.checked)} />
				<br />
				<span>
					Quiero recibir algún tipo de información sobre mi cuenta y contenidos relacionados con información
					de diferetnes centros
				</span>
				<br />
				{props.footer}
				<br />
				<button className="button_violet_great" onClick={() => actions.setUpStep()}>
					Crear Cuenta
				</button>
				<br />
				<button className="button_white_border_violet_great" onClick={() => actions.setUpStep()}>
					Registro con Google
				</button>
			</div>
		</>
	);
};

export default StudentForm;
