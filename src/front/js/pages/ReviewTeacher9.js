import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher9 = () => {
	const history = useHistory();
	return (
		<div className="reviewTeacher3 mx-auto">
			<div className="d-flex">
				<img alt="foto" />
				<div>FOTOOOOO</div>
			</div>

			<h1 className="">¡Gracias!</h1>
			<p>Tu review se ha registrado correctamente. ¿Por qué hacer una review de otro profesor?</p>
		</div>
	);
};

export default ReviewTeacher9;
