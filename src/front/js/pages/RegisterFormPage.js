import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Modal from "../component/Modal/Modal1";
import Search from "../component/Search/Search";
import Thanks from "../component/Thanks/Thanks";
import StudentForm from "../component/Forms/StudentForm";
import TeacherForm from "../component/Forms/TeacherForm";
import { BsArrowLeft } from "react-icons/bs";
import "../../styles/index.scss";

const RegisterFormPage = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [show, setShow] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/schools")
			.then(res => res.json())
			.then(data => {
				setData(data);
				console.log(data);
			})
			.catch(err => console.log(err));
	}, []);
	const [checked, setChecked] = useState({
		student: false,
		teacher: false
	});
	const toLogin = () => {
		alert("You need to login");
		history.push("/login");
	};
	//
	console.log("is_logged", actions.isLogged());
	console.log(data);
	const handlePut = () => {
		console.log();
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: JSON.parse(localStorage.getItem("id_user")),
				school_id: JSON.parse(localStorage.getItem("selected_item")).id,
				sign_completed: true
			})
		};

		fetch(process.env.BACKEND_URL + "/user", options)
			.then(res => {
				console.log(res);

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
				{/* <button onClick={() => setShow(!show)} /> */}
				{show ? (
					<Modal
						cross={
							<div className="text-center w-100" onClick={() => setShow(!show)}>
								{" "}
								<button type="button" className="close" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>{" "}
							</div>
						}
						body={
							<>
								<h1 className="violet_h1_forms mx-auto">Registro</h1>
								<h5 className="colaborarUchoose mx-auto">
									??C??mo quieres colaborar con <br />
									u-choose?
								</h5>
								<br />{" "}
								<label className="containerLabel" htmlFor="student">
									<input
										className="input mx-auto"
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
								<label className="containerLabel" htmlFor="teacher">
									<br />{" "}
									<input
										className="input mx-auto"
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
									Soy profesor
								</label>
								<br /> <br />{" "}
								<button onClick={() => actions.setUpStep()} className="button_violet_small_register">
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
				cross={<div onClick={() => setShow(!show)}> </div>}
				arrow={
					<div onClick={() => actions.setDownStep()}>
						{" "}
						<BsArrowLeft />{" "}
					</div>
				}
				body={checked.student === true ? <StudentForm /> : <TeacherForm />}
			/>
		);
	} else if (store.step === 2) {
		return (
			<Modal
				cross={<div onClick={() => setShow(!show)} />}
				arrow={
					<div onClick={() => actions.setDownStep()}>
						<BsArrowLeft />{" "}
					</div>
				}
				body={
					checked.student === true ? (
						<Search
							className="btnSearch"
							title="??D??nde has estudiado?"
							placeholder="Busca un centro"
							span1="??No encuentras tu centro?"
							data={data}
							type="schools"
							span2="Saltar este paso"
							button={
								<button onClick={handlePut} className="button_violet_small_register my-3">
									Siguiente
								</button>
							}
						/>
					) : (
						<Search
							className="btnSearch"
							title="??D??nde has dado clase?"
							placeholder="Busca un centro"
							span1="??No encuentras tu centro?"
							data={data}
							type="schools"
							button={
								<button onClick={handlePut} className="button_violet_small_register my-3">
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
				cross={<div onClick={() => setShow(!show)}> </div>}
				arrow={
					<div onClick={() => actions.setDownStep()}>
						{" "}
						<BsArrowLeft />
					</div>
				}
				body={
					checked.student ? (
						<>
							<Thanks
								className=" Thanks1"
								subtitle2="Has completado tu registro, ya puedes comenzar a escribir reviews"
								buttons={
									<>
										{actions.isLogged() ? (
											<button
												onClick={() => history.push("/review")}
												className="button_marino_great">
												Hacer un review
											</button>
										) : (
											<button onClick={toLogin} className="button_marino_great">
												Hacer un review
											</button>
										)}
										<span onClick={() => actions.setUpStep()}> Ahora no</span>
									</>
								}
							/>
						</>
					) : (
						<>
							<Thanks
								subtitle="Has completado tu registro, ??Quieres que te ayudemos a tomar una decisi??n sobre tu futuro?"
								buttons={
									<div className="btnGroup">
										{actions.isLogged() ? (
											<button
												onClick={() => history.push("/teacherprofile")}
												className="button_violet_great  w-100">
												Ver tu perfil
											</button>
										) : (
											<button onClick={toLogin} className="button_violet_great  w-100">
												Ver tu perfil
											</button>
										)}

										<button
											onClick={() => history.push("/")}
											className="button_white_border_violet_small2  w-100">
											Volver a la home
										</button>
									</div>
								}
							/>
						</>
					)
				}
			/>
		);
	} else
		return (
			<>
				<Modal
					cross={<div onClick={() => setShow(!show)}> </div>}
					arrow={
						<div onClick={() => actions.setDownStep()}>
							{" "}
							<BsArrowLeft />
						</div>
					}
					body={
						<>
							<Thanks
								subtitle="Has completado tu registro, ??Quieres que te ayudemos a tomar una decisi??n sobre tu futuro?"
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
											Buscar profesores
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
