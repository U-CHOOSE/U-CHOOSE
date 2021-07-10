import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "../component/Search/Search";

const MyCenters = () => {
	return (
		<div>
			<h1 className="title">Mis centros</h1>
			<Search title="fdsfd" placeholder="fefsfsdf" />
		</div>
	);
};

export default MyCenters;
