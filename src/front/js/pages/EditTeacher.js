import React, { useEffect, useState, useContext } from "react";
import "../../styles/editTeacher.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
const EditTeacher = () => {
	const history = useHistory();
	const { actions } = useContext(Context);
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
				console.log(json);
			});
	}, []);
	console.log(user_id);
	const body = {
		full_name: formData.fullname,
		email: formData.email,
		_password: formData._password
	};

	// };
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
					actions.setUpStep();
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

	return (
		<div>
			<div className="student-contain1">
				<label htmlFor="upload-photo">
					<img className="img-profile" src={data.img} alt="img" />
				</label>

				<input
					type="file"
					onChange={e => {
						setImg(e.target.files);
					}}
					id="upload-photo"
				/>

				<button className="student-button1">Mis centros</button>
			</div>

			<div className="contain-inputs ml-3">
				<div className="contain-inp input1">
					<label>Nombre completo</label>
					<input
						type="text"
						className="form-control input"
						placeholder={data.full_name}
						value={formData.fullname}
						onChange={e => setFormData({ ...formData, fullname: e.target.value })}
					/>
				</div>
				<p className="pstudent">Podrás ocultarlo en tus reviews</p>
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
			<div className="div-button-save ml-3 mt-5">
				<button className="button-save" onClick={handlePut}>
					Guardar
				</button>
			</div>
		</div>
	);
};

export default EditTeacher;
