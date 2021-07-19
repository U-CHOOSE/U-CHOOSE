import React from "react";
import "../../styles/searchteacher.scss";

import Search from "../component/Search/Search";

const SearchTeacher = () => {
	return (
		<div className="contain">
			<Search title="Buscar un profesor" placeholder="Search" span1="¿No encuentras tu profesor?" />
		</div>
	);
};

export default SearchTeacher;
