import React, { useState, useEffect, useContext } from "react";
import Search from "../component/Search/Search";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";

const SearchTeachers = () => {
	const { actions } = useContext(Context);
	const history = useHistory();
	const [data, setData] = useState("");
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			alert("Hola");
		}
	};
	useEffect(
		() => {
			fetch(process.env.BACKEND_URL + "/user_teachers")
				.then(res => res.json())
				.then(data => setData(data));
		},
		[!data]
	);
	// console.log(data);;

	return (
		<Container>
			<Search
				title="Buscar un profesor"
				placeholder="Search"
				span1="¿No encuentras tu profesor?"
				type="user"
				data={data}
				onKeyPress={handleKeyPress}
				noSelect={true}
			/>
		</Container>
	);
};

export default SearchTeachers;
