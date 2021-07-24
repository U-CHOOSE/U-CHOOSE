import React, { useState, useEffect, useContext } from "react";
import "../../styles/studentProfile.scss";

const StudentProfile = () => {
	const [formData, setFormData] = useState({
		full_name: "",
		email: "",
		_password: "",
		repeatPassword: ""
	});

	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password
	};

	// const [name, setName] = useState("david");
	// const [email, setEmail] = useState("");
	// const [teacher, setTeacher] = useState("");
	// const [password, setPassword] = useState("");
	// const [passrepeat, setPassrepeat] = useState("");
	// const validatePassword = () => {
	// 	if ({ password } != { passrepeat }) {
	// 		alert("Las contraseñas no son iguales");
	// 		console.log("password", { password });
	// 		console.log("passrepeat", { passrepeat });
	// 	}
	// };
	const handlePut = () => {
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		};

		fetch(process.env.BACKEND_URL + "/user", options).then(res => {
			console.log(res);

			if (res.status === 201) {
				alert("ok");
				actions.setUpStep();
			} else {
				alert("failed to fetch");
			}
			console.log(status);
			return res.json();
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
						value={formData.fullname}
						onChange={e => setFormData({ ...formData, fullname: e.target.value })}
					/>
				</div>
				<p className="pstudent">Podrás ocultarlo en tus reviews</p>
				<div className="contain-inp">
					<label>Email</label>
					<input
						type="email"
						className="form-control input-email inp"
						value={formData.email}
						onChange={e => setFormData({ ...formData, email: e.target.value })}
					/>
				</div>
				{/* <div className="contain-inp">
					<label>¿De qué eres profesor?</label>
					<input
						type="text"
						className="form-control input-text inp"
						placeholder={teacher}
						
					/>
				</div> */}
				<div className="contain-inp">
					<label>Contraseña</label>
					<input
						type="password"
						className="form-control input-text inp"
						placeholder="password"
						value={formData._password}
						onChange={e => setFormData({ ...formData, _password: e.target.value })}
					/>
				</div>
				<div className="contain-inp">
					<label>Repetir contraseña</label>
					<input
						type="password"
						className="form-control input-password inp"
						placeholder="passrepeat"
						value={formData.password}
						onChange={e => setFormData({ ...formData, _password: e.target.value })}
					/>
				</div>
			</div>
			<div className="div-button-save ml-3 mt-5">
				<button className="student-button2" onClick={handlePut}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default StudentProfile;
