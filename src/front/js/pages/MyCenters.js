import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import Search from "../component/Search/Search";
import { Context } from "../store/appContext";

const MyCenters = () => {
	const [data, setData] = useState("");
	const { store, actions } = useContext(Context);
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			alert("Hola");
			actions.setUpStep();
		}
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
					button={<button className="student-button2">Guardar</button>}
				/>
			</div>
		</>
	);
};

export default MyCenters;
