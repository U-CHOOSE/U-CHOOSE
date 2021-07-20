import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher8 = () => {
	const history = useHistory();
	return (
		<div className="reviewTeacher8 mx-auto">
			<div className="d-flex">
				<img alt="foto" />
				<div>
					<span>nameteacher</span>
					<span>nameEstudios</span>
				</div>
			</div>

			<h1 className="">¿Algo mas?</h1>
			<textarea placeholder="Comienza a escribir" />
			<button
				className="button_violet_small button__search"
				onClick={() =>
					history.push("/reviewteacher/id/university/pasion/examples/implication/year/anythingelse/send")
				}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher8;
