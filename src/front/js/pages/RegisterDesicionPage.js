import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../component/Modal/Modal";
const RegisterDesicionPage = () => {
	const history = useHistory();
	const [show, setShow] = useState(false);
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
									onClick={e =>
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
							<button onClick={() => setSteps(steps + 1)} className="button_violet_large">
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
				title="Detalles de tu cuenta"
				subtitle="¿Cómo quires colaborar con u-choose?"
				handleClose={() => setShow(false)}
				body={checked.student === true ? "student" : "teacher"}
				footer={
					<button onClick={() => setSteps(steps + 1)} className="button_violet_large">
						Siguiente
					</button>
				}
			/>
		);
	}
};

export default RegisterDesicionPage;

// <div>
//     <h1>Registro</h1>
//     <h4>¿Cómo quires colaborar con u-choose?</h4>
//              <form>
//      <input type="radio" value="male" id="male"
//        onChange={handleChange} name="gender" />
//      <label for="male">Male</label>

//     <input type="radio" value="female" id="female"
//       onChange={handleChange} name="gender"/>
//     <label for="female">Female</label>
//  </form>

//  <p>You gender is --> {gender}</p>

// </div>
