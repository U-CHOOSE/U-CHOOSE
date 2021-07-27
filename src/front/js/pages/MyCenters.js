import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import Search from "../component/Search/Search";

const MyCenters = () => {
	return (
		<>
			<Search
				title="Mis centros"
				placeholder="Busca un centro"
				span1="¿No encuentras tu centro?"
				button="Guardar"
			/>
		</>
	);
};

export default MyCenters;
