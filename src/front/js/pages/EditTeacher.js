import React, { useEffect, useState, useContext } from "react";
import "../../styles/editTeacher.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
const EditTeacher = () => {
	const history = useHistory();
	const { actions, store } = useContext(Context);
	const [formData, setFormData] = useState({
		full_name: "",
		email: "",
		_password: "",
		repeatPassword: "",
		linkedin: "",
		typeOfteachers: ""
	});

	const [img, setImg] = useState("");
	const [data, setData] = useState("");
	const user_id = localStorage.getItem("id_user");

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/user/" + user_id)
			.then(res => res.json())
			.then(json => {
				setData(json);
				console.log("data", json);
			});
	}, []);
	console.log(user_id);
	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password,
		linkedin: formData.linkedin,
		type_of_teacher: formData.typeOfteachers
	};

	const handlePut = () => {
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		};

		fetch(process.env.BACKEND_URL + "/user", options)
			.then(res => {
				console.log(res);

				if (res.status === 201 && _password === repeatPassword) {
					alert("ok");
					// actions.setUpStep();
				} else {
					alert("failed to fetch");
				}
				console.log(status);
				return res.json();
			})
			.then(json => setFormData(json))
			.catch(error => console.log(error));
	};
	console.log(data);
	const handlePutImage = img => {
		actions.get_img(img);
	};

	return (
		<div className="container-fluid cP">
			{/* <input
				type="file"
				onChange={e => {
					handlePutImage(e.target.files);
				}}
			/>
			<button onClick={actions.get_img(img)}> Cambiar imagen</button> */}
			<div className="row">
				<div className="col-md-2" />
				<div className="col-4 col-md-10">
					<label htmlFor="upload-photo">
						<img className="img-profilee" src={store.userImg} alt="img" />
					</label>
					<input
						type="file"
						onChange={e => {
							handlePutImage(e.target.files);
						}}
						id="upload-photo"
					/>
				</div>
				<div className="col-8" />
			</div>

			{/* <button className="student-button1" onClick={() => history.push("/mycenters")}>
				Mis centros
			</button> */}

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
					<div className="contain-inp">
						<label>Nombre completo</label>
						<input
							type="text"
							className="form-control input-text inp "
							placeholder={data.full_name}
							value={formData.fullname}
							onChange={e => setFormData({ ...formData, fullname: e.target.value })}
						/>
						<div className="c_p">
							<p className="pstudent pstudent2">Podrás ocultarlo en tus reviews</p>
						</div>
					</div>
				</div>
				<div className="col-md-4" />
			</div>

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
					<div className="contain-inp">
						<label>Email</label>
						<input
							type="email"
							placeholder={data.email}
							className="form-control input-email inp"
							value={formData.email}
							onChange={e => setFormData({ ...formData, email: e.target.value })}
						/>
					</div>
				</div>
				<div className="col-md-4" />
			</div>

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
					<div className="contain-inp">
						<label>URL de Linkedin</label>
						<input
							type="text"
							placeholder={data.linkedin}
							className="form-control input-email inp"
							value={formData.linkedin}
							onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
						/>
					</div>
				</div>
				<div className="col-md-4" />
			</div>

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
					<div className="contain-inp">
						<label>¿De qué eres profesor?</label>
						<input
							type="text"
							placeholder={data.type_of_teacher}
							className="form-control input-email inp"
							value={formData.typeOfteachers}
							onChange={e => setFormData({ ...formData, typeOfteachers: e.target.value })}
						/>
					</div>
				</div>
				<div className="col-md-4" />
			</div>

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
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
				</div>
				<div className="col-md-4" />
			</div>

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
					<div className="contain-inp">
						<label>Repetir contraseña</label>
						<input
							type="password"
							className="form-control input-password inp"
							placeholder="passrepeat"
							value={formData.repeatPassword}
							onChange={e => setFormData({ ...formData, repeatPassword: e.target.value })}
						/>
					</div>
				</div>
				<div className="col-md-4" />
			</div>

			<div className="row">
				<div className="col-md-4" />
				<div className="col-12 col-md-4">
					<div className="c_s">
						<button className="button-save" onClick={handlePut}>
							Guardar
						</button>
					</div>
				</div>
				<div className="col-md-4" />
			</div>
		</div>
	);
};

export default EditTeacher;
