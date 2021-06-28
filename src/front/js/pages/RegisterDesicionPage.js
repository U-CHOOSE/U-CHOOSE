import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "../component/Modal/Modal";
import StudentForm from "../component/Forms/StudentForm";
import TeacherForm from "../component/Forms/TeacherForm";
// import AiOutlineArrowLeft from "react-icons";

const RegisterDesicionPage = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [show, setShow] = useState(true);
	const [checked, setChecked] = useState({
		student: false,
		teacher: false
	});
	const [steps, setSteps] = useState(0);
	const max_steps_student = 4;
	const max_steps_teacher = 3;

	if (steps === 0) {
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
									checked={checked.student}
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
									checked={checked.teacher}
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
							<button onClick={() => store.setUpSteps(store.step + 1)} className="button_violet_large">
								Siguiente
							</button>
						}
					/>
				) : (
					""
				)}
			</>
		);
	} else if (steps === 1) {
		return (
			<Modal
				// arrow={<AiOutlineArrowLeft />}
				title="Detalles de tu cuenta"
				subtitle="¿Cómo quires colaborar con u-choose?"
				handleClose={() => setShow(false)}
				body={checked.student === true ? <StudentForm /> : <TeacherForm />}
				// footer={
				// 	<button onClick={() => setSteps(steps + 1)} className="button_violet_large">
				// 		Siguiente
				// 	</button>
				// }
			/>
		);
	} else if (steps === 2) {
		<Modal
			title={checked.student === true ? <h1>¿Dónde has estudiado </h1> : <h1> ¿Dónde has dado clase?</h1>}
			subtitle="¿Cómo quires colaborar con u-choose?"
			handleClose={() => setShow(false)}
			body={checked.student === true ? <StudentForm /> : <TeacherForm />}
			// footer={
			// 	<button onClick={() => setSteps(steps + 1)} className="button_violet_large">
			// 		Siguiente
			// 	</button>
			// }
		/>;
	}
};

export default RegisterDesicionPage;
