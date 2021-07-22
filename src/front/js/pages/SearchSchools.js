import React, { useState, useContext, useEffect } from "react";
import Search from "../component/Search/Search";
import { Context } from "../store/appContext";

const SearchSchools = () => {
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
			.then(data => setData(data))
			.catch(err => console.log(err));
	}, []);
	return (
		<>
			<Search
				title="Buscar un centro "
				placeholder="Escribe el nombre"
				span1="¿No encuentras tu centro?"
				type="schools"
				data={data}
				onKeyPress={handleKeyPress}
			/>
		</>
	);
};

export default SearchSchools;
