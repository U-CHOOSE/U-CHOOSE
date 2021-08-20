import React, { useState, useContext, useEffect } from "react";
import Search from "../component/Search/Search";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const SearchSchools = () => {
	const history = useHistory();
	const [data, setData] = useState("");
	const [mySchools, setMySchools] = useState("");
	const { actions } = useContext(Context);
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
		}
	};

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/schools")
			.then(res => res.json())
			.then(json => {
				setData(json);
				// localStorage.setItem("school_id", json.body.id);
			})
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
				mySchools={mySchools}
			/>
		</>
	);
};

export default SearchSchools;
