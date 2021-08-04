import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import Search from "../component/Search/Search";
import { Context } from "../store/appContext";

const MyCenters = () => {
	const [data, setData] = useState("");
	const [mySchools, setMySchools] = useState("");
	const { store, actions } = useContext(Context);
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			alert("hola");
		}
	};
	useEffect(() => {
		const token = actions.getToken();
		fetch(process.env.BACKEND_URL + "/user/schools", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(json => {
				setMySchools(json);
				console.log("my schools", json);
			})
			.catch(err => console.log(err));
	}, []);
	const updateSchools = () => {
		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: JSON.parse(localStorage.getItem("id_user")),
				school_id: JSON.parse(localStorage.getItem("selected_item")).id
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
			.then(json => console.log(json))
			.catch(error => console.log(error));
	};

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/schools")
			.then(res => res.json())
			.then(json => {
				setData(json);
				localStorage.setItem("school_id", json.body.id);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<>
			<div className="container-centers">
				<Search
					title="Mis centros"
					placeholder="Busca un centro"
					span1="¿No encuentras tu centro?"
					type="schools"
					data={data}
					onKeyPress={handleKeyPress}
					mySchools={mySchools}
				/>
				<button className="student-button2" onClick={updateSchools}>
					Guardar
				</button>

			</div>
		</>
	);
};

export default MyCenters;
