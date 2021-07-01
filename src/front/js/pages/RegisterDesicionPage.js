import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "../component/Modal/Modal";
import StudentForm from "../component/Forms/StudentForm";
import TeacherForm from "../component/Forms/TeacherForm";
// import AiOutlineArrowLeft from "react-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegisterDesicionPage = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [show, setShow] = useState(true);
	const [checked, setChecked] = useState({
		student: false,
		teacher: false
	});

	if (store.step === 0) {
		return (
			<>
				<button onClick={() => setShow(!show)}>Modal</button>
				{show ? (
					<Modal
						title="Registro"
						subtitle="¿Cómo quires colaborar con u-choose?"
						handleClose={() => setShow(false)}
						body={
							<form>
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
							</form>
						}
						footer={
							<>
								<button onClick={() => actions.setUpStep()} className="button_violet_large">
									Siguiente
								</button>
								<span> No he empezado a estudiar</span>
							</>
						}
					/>
				) : (
					""
				)}
			</>
		);
	} else if (store.step === 1) {
		return (
			<Modal
				// arrow={<FontAwesomeIcon icon="fa-solid fa-arrow-left" />}
				title="Detalles de tu cuenta"
				subtitle="¿Cómo quires colaborar con u-choose?"
				handleClose={() => setShow(false)}
				body={checked.student === true ? <StudentForm /> : <TeacherForm />}
			/>
		);
	} else if (store.step === 2) {
		return (
			<Modal
				title={checked.student === true ? <h1>¿Dónde has estudiado </h1> : <h1> ¿Dónde has dado clase?</h1>}
				subtitle="¿Cómo quires colaborar con u-choose?"
				handleClose={() => setShow(false)}
				body={checked.student === true ? <StudentForm /> : <TeacherForm />}
			/>
		);
	}
};

export default RegisterDesicionPage;
