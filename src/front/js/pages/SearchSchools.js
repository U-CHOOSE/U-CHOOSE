import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Search from "../component/Search/Search";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchSchools = () => {
	const [data, setData] = useState("");
	const { actions } = useContext(Context);
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
				// localStorage.setItem("school_id", json.body.id);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<Container>
			<Search
				title="Buscar un centro "
				placeholder="Escribe el nombre"
				span1="¿No encuentras tu centro?"
				type="schools"
				data={data}
				onKeyPress={handleKeyPress}
			/>
		</Container>
	);
};

export default SearchSchools;
