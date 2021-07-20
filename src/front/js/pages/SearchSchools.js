import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import Search from "../component/Search/Search";
import { Context } from "../store/appContext";

const SearchSchools = () => {
	const [data, setData] = useState("");
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/schools")
			.then(res => res.json())
			.then(data => setData(data));
	}, []);
	return (
		<>
			<Search
				title="Buscar un centro "
				placeholder="Escribe el nombre"
				span1="¿No encuentras tu centro?"
				type="schools"
				data={data}
			/>
		</>
	);
};

export default SearchSchools;
