import React, { useEffect, useState } from "react";
import logo from "../../../../docs/assets/img/Logo_U-CHOOSE .jpg";
import "../../styles/reviewteacher.scss";
import Search from "../../component/Search/Search";

const ReviewTeacher = () => {
	return (
		<div className="mx-auto">
			<Search
				title="Buscar profesor"
				placeholder="Busca un centro"
				span_="¿Qué profesor quieres evaluar?"
				button="Siguiente" 
			/>
		</div>
	);
};

export default ReviewTeacher;
