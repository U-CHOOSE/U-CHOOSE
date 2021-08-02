import React, { useState, useEffect, useContext } from "react";
import "../../styles/myCenters.scss";
import Search from "../component/Search/Search";

const MyCenters = () => {
	return (
		<>
			<div className="container-centers">
				<Search
					title="Mis centros"
					placeholder="Busca un centro"
					span1="¿No encuentras tu centro?"
					button={<button className="student-button2">Guardar</button>}
				/>
			</div>
		</>
	);
};

export default MyCenters;
