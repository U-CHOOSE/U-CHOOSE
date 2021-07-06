import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "../component/Modal/Modal";
// import Search from "../component/Search/Search";
import Thanks from "../component/Thanks/Thanks";
import StudentForm from "../component/Forms/StudentForm";
import TeacherForm from "../component/Forms/TeacherForm";

const RegisterFormPage = () => {
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
						cross={<div onClick={() => actions.setUpStep()}> X </div>}
						body={
							<>
								<h1 className="violet_h1_forms">Registro</h1>
								<h2>¿Cómo quires colaborar con u-choose?</h2>

								{/* <div>
									<label htmlFor="student">
										Soy alumno
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
										<span className="checkmark" />
									</label>
								</div> */}
								<label className="container" htmlFor="student">
									<input
										type="radio"
										// value={true}
										id="student"
										checked={checked.student}
										onClick={() =>
											setChecked({
												teacher: false,
												student: !checked.student
											})
										}
									/>
									Soy alumno
								</label>
								<label className="container" htmlFor="teacher">
									<input
										type="radio"
										// value={true}
										id="teacher"
										checked={checked.teacher}
										onClick={() =>
											setChecked({
												teacher: !checked.teacher,
												student: false
											})
										}
									/>
									Soy professor
								</label>
								{/* <div>
									<label htmlFor="teacher">
										Soy professor
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
									</label>
								</div> */}
								<button onClick={() => actions.setUpStep()} className="button_violet_small register">
									Siguiente
								</button>
								<span className="span_1"> No he empezado a estudiar</span>
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
				cross={<div onClick={() => actions.setUpStep()}> X </div>}
				arrow={<div onClick={() => actions.setDownStep()}> back </div>}
				body={checked.student === true ? <StudentForm /> : <TeacherForm />}
			/>
		);
	} else if (store.step === 2) {
		return (
			<Modal
				cross={<div onClick={() => actions.setUpStep()}> X </div>}
				arrow={<div onClick={() => actions.setDownStep()}> back </div>}
				body={
					checked.student === true ? (
						<>student</>
					) : (
						// <Search
						// 	title="¿Dónde has estudiado?"
						// 	placeholder="Busca un centro"
						// 	span="¿No encuentras tu centro?"
						// 	data = {
						// 		//didnt'have he endpoint to recived the data
						// 	}
						// />
						<>teacher</>
						// <Search
						// title="¿Dónde has dado clase?"
						// placeholder="Busca un centro"
						// span="¿No encuentras tu centro?"
						// data = {
						// 	//didnt'have he endpoint to recived the data
						// } />
					)
				}
			/>
		);
	} else if (store.step === 3) {
		return (
			<Modal
				cross={<div onClick={() => actions.setUpStep()}> X </div>}
				arrow={<div onClick={() => actions.setDownStep()}> back </div>}
				body={
					checked.student === true ? (
						<>
							student
							<button onClick={() => actions.setUpStep()} className="button_violet_large">
								Siguiente
							</button>
							{/* <Thanks
								subtitle="Has completado tu registro, ya puedes comenzar a escribir reviews"
								buttons={
									<>
										<span onClick={() => history.push("/")}> Ahora no</span>
										<button onClick={() => history.push("/review")} />
									</>
								}
							/> */}
						</>
					) : (
						<>
							teacher
							{/* <Thanks
								subtitle="Has completado tu registro, ¿Quieres que te ayudemos a tomar una decisión sobre tu futuro?"
								buttons={
									<>
										<button onClick={() => history.push("/teacherprofile")}>Ver tu perfil</button>
										<button onClick={() => history.push("/")}>Volver a la home</button>
									</>
								}
							/> */}
							<button onClick={() => actions.setUpStep()} className="button_violet_large">
								Siguiente
							</button>
						</>
					)
				}
			/>
		);
	} else
		return (
			<>
				<Modal
					cross={<div onClick={() => actions.setUpStep()}> X </div>}
					arrow={<div onClick={() => actions.setDownStep()}> back </div>}
					body={
						<>
							Only can view the student
							<Thanks
								subtitle="Has completado tu registro, ¿Quieres que te ayudemos a tomar una decisión sobre tu futuro?"
								buttons={
									<>
										<button onClick={() => history.push("/searchschools")}>Buscar centros</button>
										<button onClick={() => history.push("/searchteachers")}>
											Buscar professores
										</button>
									</>
								}
							/>
						</>
					}
				/>
			</>
		);
};

export default RegisterFormPage;
