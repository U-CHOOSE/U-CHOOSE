import React, { useEffect, useState } from "react";
import "../../styles/editTeacher.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

const EditTeacher = () => {
	const [name, setName] = useState("david");
	const [email, setEmail] = useState("");
	const [teacher, setTeacher] = useState("");
	const [password, setPassword] = useState("");
	const [passrepeat, setPassrepeat] = useState("");
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
				</div>
			</div>
		</div>
	);
};

export default EditTeacher;
