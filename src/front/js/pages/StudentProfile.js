import React, { useState, useEffect, useContext } from "react";
import "../../styles/studentProfile.scss";
import Modal from "../component/Modal/Modal";

const StudentProfile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [teacher, setTeacher] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div>
			<div className="actions">{/* flecha
				salir */}</div>

			<div className="contain1">
				<img className="img-profile" url="" />
				<button className="button1">Mis centros</button>
			</div>

			<div className="contain-inputs">
				<input
					type="text"
					className="form-control input-text"
					placeholder="Nombre completo"
					onChange={event => setName(event.target.value)}
				/>
				<input
					type="email"
					className="form-control input-email"
					placeholder="Email"
					onChange={event => setEmail(event.target.value)}
				/>
				<input
					type="text"
					className="form-control input-text"
					placeholder="¿De qué eres profesor?"
					onChange={event => setTeacher(event.target.value)}
				/>
				<button className="button1">Mis centros</button>
			</div>
		</div>
	);
};

export default StudentProfile;
