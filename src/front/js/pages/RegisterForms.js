import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import "../../styles/registerForms.scss";
import Modal from "../component/Modal/Modal";

const RegisterForms = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [checked, setChecked] = useState({
		student: false,
		teacher: false
	});

	const [show, setShow] = useState(true);
	if (store.step === 0) {
		return (
			<div>
				<button onClick={() => setShow(!show)}>open modal</button>
				{show ? (
					<Modal
						arrow={
							<>
								<div onClick={() => actions.setDownStep()}>
									<FontAwesomeIcon icon={faArrowLeft} />
								</div>
								<div onClick={() => setShow(!show)}>X</div>
							</>
						}
						body={
							<div className="container-fluid">
								<div className="container_title_subitle">
									<h1 className="violet_h1 title">Registro</h1>
									<h2>¿Cómo quieres colaborar con u-choose?</h2>
								</div>
								<input
									type="radio"
									value={true}
									id="student"
									defaultChecked={checked.student}
									onClick={() =>
										setChecked({
											teacher: false,
											student: !checked.student
										})
									}
								/>
								<label htmlFor="student">Soy alumno</label>
								<input
									type="radio"
									value="teacher"
									defaultChecked={checked.teacher}
									id="teacher"
									onClick={() =>
										setChecked({
											student: false,
											teacher: !checked.teacher
										})
									}
								/>
								<label htmlFor="teacher">Soy professor</label>
								<button onClick={() => actions.setUpStep()} className="button_violet_great">
									Siguiente
								</button>
								<span onClick={() => actions.setUpStep()}> No he empezado a estudiar</span>
							</div>
						}
					/>
				) : (
					""
				)}
			</div>
		);
	} else if (store.step === 1) {
	}
};

export default RegisterForms;
