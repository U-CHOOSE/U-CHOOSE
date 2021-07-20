import React, { useState, useEffect, useContext } from "react";
import "../../styles/studentProfile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StudentProfile = () => {
	const [name, setName] = useState("david");
	const [email, setEmail] = useState("");
	const [teacher, setTeacher] = useState("");
	const [password, setPassword] = useState("");
	const [passrepeat, setPassrepeat] = useState("");
	const validatePassword = () => {
		if ({ password } != { passrepeat }) {
			alert("Las contraseñas no son iguales");
			console.log("password", { password });
			console.log("passrepeat", { passrepeat });
		}
	};

	const updateData = () => {
		fetch("http://localhost:3005/users/1", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				lastName: "{name}",
				Email: "{email}",
				especialidad: "{teacher}",
				password: "{password}"
			})
		})
			.then(res => res.json())
			.then(res => {
				console.log(res);
			});
	};

	return (
		<div>
			{/* <div className="actions">
				<Link className="links" to={"/"}>
					<FontAwesomeIcon className="icon-x" icon={faTimes} />
				</Link>
			</div> */}

			<div className="student-contain1">
				<img
					className="img-profile"
					src="https://laverdadnoticias.com/__export/1577809178240/sites/laverdad/img/2019/12/31/1465326837-rt-shakira01.jpg_1017309733.jpg"
					alt="img"
				/>
				<button className="student-button1">Mis centros</button>
			</div>

			<div className="contain-inputs ml-3">
				<div className="contain-inp input1">
					<label>Nombre completo</label>
					<input
						type="text"
						className="form-control input"
						placeholder={name}
						onChange={event => setName(event.target.value)}
					/>
				</div>
				<p className="pstudent">Podrás ocultarlo en tus reviews</p>
				<div className="contain-inp">
					<label>Email</label>
					<input
						type="email"
						className="form-control input-email inp"
						placeholder={email}
						onChange={event => setEmail(event.target.value)}
					/>
				</div>
				<div className="contain-inp">
					<label>¿De qué eres profesor?</label>
					<input
						type="text"
						className="form-control input-text inp"
						placeholder={teacher}
						onChange={event => setTeacher(event.target.value)}
					/>
				</div>
				<div className="contain-inp">
					<label>Contraseña</label>
					<input
						type="password"
						className="form-control input-text inp"
						placeholder={password}
						onChange={event => setPassword(event.target.value)}
					/>
				</div>
				<div className="contain-inp">
					<label>Repetir contraseña</label>
					<input
						type="password"
						className="form-control input-password inp"
						placeholder={passrepeat}
						onChange={event => setPassrepeat(event.target.value)}
					/>
				</div>
			</div>
			<div className="div-button-save ml-3 mt-5">
				<button className="student-button2" onClick={validatePassword}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default StudentProfile;
