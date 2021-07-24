import React, { useEffect, useState } from "react";
import "../../styles/editTeacher.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

const EditTeacher = () => {
	const [name, setName] = useState("david");
	const [email, setEmail] = useState("");
	const [work, setWork] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [teacher, setTeacher] = useState("");
	const [password, setPassword] = useState("");
	const [passrepeat, setPassrepeat] = useState("");

	const passwordOK = () => {
		if (password != "" || passrepeat != "") {
			if (password != passrepeat) {
				return <p className="passOk">Las contraseñas no coinciden</p>;
			}
		} else {
			return "";
		}
	};
	// useEffect(() => {
	// 	passwordOK;
	// }, []);

	return (
		<div>
			<div className="row">
				<div className="col-12 ">
					<img
						className="img-profile"
						src="https://laverdadnoticias.com/__export/1577809178240/sites/laverdad/img/2019/12/31/1465326837-rt-shakira01.jpg_1017309733.jpg"
						alt="img"
					/>

					<div className="contain-inputs ml-3 ">
						<div className="contain-inp input1">
							<label>Nombre completo</label>
							<input
								type="text"
								className="form-control input"
								placeholder={name}
								onChange={event => setName(event.target.value)}
							/>
						</div>
						<p className="editP">Podrás ocultarlo en tus reviews</p>
						<div className="contain-inp mt-4">
							<label>Email</label>
							<input
								type="email"
								className="form-control input-email inp"
								placeholder={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</div>
						<div className="contain-inp">
							<label>Empleo actual</label>
							<input
								type="text"
								className="form-control input-text inp"
								placeholder={work}
								onChange={event => setWork(event.target.value)}
							/>
						</div>
						<div className="contain-inp">
							<label>URL de Linkedin</label>
							<input
								type="text"
								className="form-control input-text inp"
								placeholder={linkedin}
								onChange={event => setLinkedin(event.target.value)}
							/>
						</div>
						<div className="contain-inp">
							<label>¿De que eres profesor?</label>
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
						{passwordOK()}
					</div>
					<div className="div-button-save ml-3 mt-5">
						<button className="button-save">Guardar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditTeacher;
