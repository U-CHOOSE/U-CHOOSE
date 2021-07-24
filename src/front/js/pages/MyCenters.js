import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "../component/Search/Search";

const MyCenters = () => {
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
