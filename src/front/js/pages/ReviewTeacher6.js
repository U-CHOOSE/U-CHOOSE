import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher6 = () => {
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

			<h1 className="">Implicación y cercanía</h1>
			<button
				className="button_violet_small button__search"
				onClick={() => history.push("/reviewteacher/id/university/pasion/examples/implication/year")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher6;
