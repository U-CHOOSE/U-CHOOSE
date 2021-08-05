import React, { useState, useContext, useEffect } from "react";
import "./Forms.scss";
import { Context } from "../../store/appContext";
import Linkedin from "../../../../../docs/assets/img/Linkedin.png";

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
		is_student: false,
		sign_completed: false
	});
	const [checked, setChecked] = useState(true);

	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password,
		promo: formData.promo,
		is_student: formData.is_student,
		type_of_teacher: formData.typeOfteachers,
		linkedin: formData.linkedin,
		sign_completed: formData.sign_completed
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
				// console.log(status);
				return res.json();
			})
			.then(json => {
				// console.log(json.teacher.user_id);
				localStorage.setItem("id_user", json.teacher.user_id);
				localStorage.setItem("teacher_id", json.teacher.id);
			});
		// .catch(error => console.log(error));
	};

	return (
		<>
			<div>
				<div>
					{" "}
					<h1 className="violet_h1_forms mx-auto">Detalles de cuenta</h1>
				</div>
				<input
					className="mx-auto w-100 p-3"
					type="text"
					placeholder="Nombre completo"
					value={formData.fullname}
					onChange={e => setFormData({ ...formData, fullname: e.target.value })}
				/>
				<br />
				<span>Podras ocultarlo en tus reviews</span>
				<br />
				<input
					className=" mx-auto w-100 m-3 p-3 "
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				<input
					className=" mx-auto w-100 m-3 p-3"
					type="text"
					placeholder="¿De qué eres profesor?"
					value={formData.typeOfteachers}
					onChange={e => setFormData({ ...formData, typeOfteachers: e.target.value })}
				/>
				<input
					className=" mx-auto w-100 m-3 p-3 "
					type="text"
					placeholder="¿URL Linkedin...?"
					value={formData.linkedin}
					onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
				/>
				<input
					className=" mx-auto w-100 m-3 p-3 "
					type="password"
					placeholder="Contraseña"
					value={formData._password}
					onChange={e => setFormData({ ...formData, _password: e.target.value })}
				/>
				<input
					className=" mx-auto w-100 m-3 p-3 "
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
				<br />
				<button className="button_violet_great_teacher" onClick={handleCreate}>
					Crear Cuenta
				</button>
				<br />
				<button className="button_white_border_violet_great" onClick={handleCreate}>
					Registro con <img className="Linkedin " src={Linkedin} />
				</button>
			</div>
		</>
	);
};

export default TeacherForm;
