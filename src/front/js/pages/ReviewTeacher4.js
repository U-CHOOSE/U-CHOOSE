import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher4 = () => {
	const history = useHistory();
	return (
		<div className="reviewTeacher3 mx-auto">
			<div className="d-flex">
				<img alt="foto" />
				<div>
					<span>nameteacher</span>
					<span>nameEstudios</span>
				</div>
			</div>

			<h1 className="">Pasión por la materia</h1>
			<button
				className="button_violet_small button__search"
				onClick={() => history.push("/reviewteacher/id/university/pasion/examples")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher4;
