import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import Search from "../component/Search/Search";

const MyCenters = () => {
	const user_id = localStorage.getItem("id_user");

	useEffect(() => {}, []);

	return (
		<div className="contain">
			<Search
				title="Mis centros"
				placeholder="Busca un centro"
				span1="¿No encuentras tu centro?"
				button="Guardar"
			/>
		</div>
	);
};

export default MyCenters;
