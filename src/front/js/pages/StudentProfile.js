import React, { useState, useEffect, useContext } from "react";
import "../../styles/studentProfile.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const StudentProfile = () => {
	const history = useHistory();
	const { actions, store } = useContext(Context);
	const [formData, setFormData] = useState({
		fullname: "",
		email: "",
		_password: "",
		repeatPassword: ""
	});

	const [img, setImg] = useState("");
	const [data, setData] = useState("");
	const user_id = localStorage.getItem("id_user");

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/user/" + user_id)
			.then(res => res.json())
			.then(json => {
				setData(json);
				actions.setImg(json.img);
				// console.log("json", json);
			});
	}, []);
	// console.log(user_id);
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

		fetch(process.env.BACKEND_URL + "/user/" + user_id, options)
			.then(res => {
				// console.log(res);

				if (res.status === 201 && _password === repeatPassword) {
					alert("ok");
				} else {
					alert("failed to fetch");
				}
				// console.log(status);
				return res.json();
			})
			.then(json => {
				setFormData(json);
			});
		// .catch(error => console.log(error));
		window.location.reload();
	};
	// console.log(data);

	const handlePutImage = img => {
		actions.get_img(img);
	};
	return (
		<div className="container-fluid cP">
			<div className="row">
				<div className="col-md-2" />
				<div className="col-4 col-md-4">
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
					<div className="cBt" />
					<button className="student-button1R mt-2" onClick={() => history.push("/mycenters")}>
						Mis centros
					</button>
					<button className="student-button1R" onClick={handlePutImage}>
						{" "}
						Cambiar imagen
					</button>
				</div>
				<div className="col-4">
					<div className="cBt" />
					<button className="student-button1 mb-2" onClick={() => history.push("/mycenters")}>
						Mis centros
					</button>
					<button className="student-button1" onClick={handlePutImage}>
						{" "}
						Cambiar imagen
					</button>
				</div>
			</div>

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

export default StudentProfile;
