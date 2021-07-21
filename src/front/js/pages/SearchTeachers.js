import React, { useState, useEffect } from "react";
import Search from "../component/Search/Search";

const SearchTeachers = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/user")
			.then(res => res.json())
			.then(data => setData(data));
	}, []);
	return (
		<>
			<Search
				title="Buscar un professor"
				placeholder="Search"
				span1="¿No encuentras tu professor?"
				type="user"
				data={data}
			/>
		</>
	);
};

export default SearchTeachers;
