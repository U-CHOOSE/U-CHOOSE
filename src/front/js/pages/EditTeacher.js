import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/editTeacher.scss";
import { Context } from "../store/appContext";

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

	const token = store.token;

	useEffect(() => {
		const token = actions.getToken();
		fetch(process.env.BACKEND_URL + "/user", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(json => {
				setData(json);
				console.log(json);
			});
	}, []);
	console.log(token);
	const body = {
		full_name: formData.full_name,
		email: formData.email,
		_password: formData._password,
		type_of_teacher: formData.typeOfteachers,
		linkedin: formData.linkedin
	};

	// };
	const handlePut = () => {
		const token = actions.getToken();
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			},
			body: JSON.stringify(body)
		};

		fetch(process.env.BACKEND_URL + "/user_put", options)
			.then(res => {
				console.log(res);

				if (res.status === 201 && _password === repeatPassword) {
					alert("ok");
				} else {
					alert("failed to fetch");
				}
				console.log(status);
				return res.json();
			})
			.then(json => setFormData(json));
		window.location.reload();
		// .catch(error => console.log(error));
	};
	console.log(data);
	const handlePutImage = img => {
		actions.get_img(img);
	};

	return (
		<div>
			{/* <input
				type="file"
				onChange={e => {
					setImg(e.target.files);
				}}
			/>
			<button onClick={actions.get_img(img)}> Cambiar imagen</button> */}

			<div className="student-contain1">
				<label htmlFor="upload-photo">
					<img className="img-profile" src={store.userImg} alt="img" />
				</label>
				<input
					type="file"
					onChange={e => {
						handlePutImage(e.target.files);
					}}
					id="upload-photo"
				/>

				{/* <button className="student-button1" onClick={() => history.push("/mycenters")}>
					Mis centros
				</button> */}
			</div>

			<div className="contain-inputs ml-3">
				<div className="contain-inp input1">
					<label>Nombre completo</label>
					<input
						type="text"
						className="form-control input"
						placeholder={data.full_name}
						value={formData.full_name}
						onChange={e => setFormData({ ...formData, full_name: e.target.value })}
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
