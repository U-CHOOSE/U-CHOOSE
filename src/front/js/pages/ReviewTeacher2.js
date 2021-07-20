import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher2 = () => {
	const history = useHistory();
	const params = useParams();
	return (
		<div className="mx-auto reviewTeacher2">
			<h1 className="violet_h1 search-title">Buscar profesor</h1>
			<span className="span__ ">¿En qué centro tuviste clase con Lucía?</span>
			<button
				className="button_violet_small button__search"
				onClick={() => history.push("/reviewteacher/id/university")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher2;
