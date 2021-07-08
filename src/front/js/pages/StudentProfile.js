import React, { useState, useEffect, useContext } from "react";
import "../../styles/studentProfile.scss";
import Modal from "../component/Modal/Modal";

const StudentProfile = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [teacher, setTeacher] = useState("");
	const [password, setPassword] = useState("");
	const [passrepeat, setPassrepeat] = useState("");
	return (
		<div>
			<div className="actions">{/* flecha
				salir */}</div>

			<div className="contain1">
				<img className="img-profile" url="" />
				<button className="button1">Mis centros</button>
			</div>

			<div className="contain-inputs">
				<div>
					<label className="input">Nombre completo</label>
					<input
						type="text"
						className="form-control input-text input"
						placeholder=""
						onChange={event => setName(event.target.value)}
					/>
				</div>
				{/* <div>
					<label>Email address</label>
					<input
						type="text"
						className="form-control input-text inp"
						placeholder="Nombre completo"
						onChange={event => setName(event.target.value)}
					/>
				</div>
				<div>
					<label>Email address</label>
					<input
						type="email"
						className="form-control input-email inp"
						placeholder="Email"
						onChange={event => setEmail(event.target.value)}
					/>
				</div>
				<div>
					<label>Email address</label>
					<input
						type="text"
						className="form-control input-text inp"
						placeholder="¿De qué eres profesor?"
						onChange={event => setTeacher(event.target.value)}
					/>
				</div>
				<div>
					<label>Email address</label>
					<input
						type="password"
						className="form-control input-password inp"
						placeholder="contraseña"
						onChange={event => setPassword(event.target.value)}
					/>
				</div>
				<div>
					<label>Email address</label>
					<input
						type="password"
						className="inp form-control input-password inp"
						placeholder="Repetir contraseña"
						onChange={event => setPassrepeat(event.target.value)}
					/>
				</div> */}
			</div>

			{/* <button className="button1">Guardar</button> */}
		</div>
	);
};

export default StudentProfile;
