import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "../component/Modal/Modal1";
import Search from "../component/Search/Search";
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
//
	const handleCreate = () => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: JSON.parse(localStorage.getItem("id_user")),
				school_id: 2
			})
		};

		fetch(process.env.BACKEND_URL + "/user", options)
			.then(res => {
				if (res.status === 201) {
					alert("ok");
					actions.setUpStep();
				} else {
					alert("failed to fetch");
				}
				console.log(status);
				return res.json();
			})
			.then(json => localStorage.setItem("id_user", json.body.user_id))
			.catch(error => console.log(error));
	};

	if (store.step === 0) {
		return (
			<>
				<button onClick={() => setShow(!show)}>Modal</button>
				{show ? (
					<Modal
						cross={<div onClick={() => setShow(!show)}> X </div>}
						body={
							<>
								<h1 className="violet_h1_forms">Registro</h1>
								<h2>¿Cómo quieres colaborar con u-choose?</h2>

								<label className="container" htmlFor="student">
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
									Soy alumno
								</label>
								<label className="container" htmlFor="teacher">
									<input
										type="radio"
										value={true}
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

								<button onClick={() => actions.setUpStep()} className="button_violet_small register">
									Siguiente
								</button>
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
				cross={<div onClick={() => setShow(!show)}> X </div>}
				arrow={<div onClick={() => actions.setDownStep()}> back </div>}
				body={checked.student === true ? <StudentForm /> : <TeacherForm />}
			/>
		);
	} else if (store.step === 2) {
		return (
			<Modal
				cross={<div onClick={() => setShow(!show)}> X </div>}
				arrow={<div onClick={() => actions.setDownStep()}> back </div>}
				body={
					checked.student === true ? (
						<Search
							title="¿Dónde has estudiado?"
							placeholder="Busca un centro"
							span1="¿No encuentras tu centro?"
							// data = {
							// 	//didnt'have he endpoint to recived the data
							// }
							span2="Saltar este paso"
							button={
								<button onClick={handleCreate} className="button_violet_small">
									Siguiente
								</button>
							}
						/>
					) : (
						<Search
							title="¿Dónde has dado clase?"
							placeholder="Busca un centro"
							span1="¿No encuentras tu centro?"
							// data = {
							// 	//didnt'have he endpoint to recived the data
							// }
							button={
								<button onClick={() => actions.setUpStep()} className="button_violet_small">
									Siguiente
								</button>
							}
						/>
					)
				}
			/>
		);
	} else if (store.step === 3) {
		return (
			<Modal
				cross={<div onClick={() => setShow(!show)}> X </div>}
				arrow={<div onClick={() => actions.setDownStep()}> back </div>}
				body={
					checked.student === true ? (
						<>
							<Thanks
								subtitle="Has completado tu registro, ya puedes comenzar a escribir reviews"
								buttons={
									<>
										<span onClick={() => actions.setUpStep()}> Ahora no</span>
										<button onClick={() => history.push("/review")} className="button_marino_great">
											Hacer un review
										</button>
									</>
								}
							/>
						</>
					) : (
						<>
							teacher
							<Thanks
								subtitle="Has completado tu registro, ¿Quieres que te ayudemos a tomar una decisión sobre tu futuro?"
								buttons={
									<>
										<button onClick={() => history.push("/teacherprofile")}>Ver tu perfil</button>
										<button onClick={() => history.push("/")}>Volver a la home</button>
									</>
								}
							/>
							<button onClick={() => actions.setUpStep()} className="button_violet_great">
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
					cross={<div onClick={() => setShow(!show)}> X </div>}
					arrow={<div onClick={() => actions.setDownStep()}> back </div>}
					body={
						<>
							<Thanks
								subtitle="Has completado tu registro, ¿Quieres que te ayudemos a tomar una decisión sobre tu futuro?"
								buttons={
									<>
										<button
											onClick={() => history.push("/searchschools")}
											className="button_violet_great">
											Buscar centros
										</button>
										<button
											onClick={() => history.push("/searchteachers")}
											className="button_white_border_violet_great">
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
