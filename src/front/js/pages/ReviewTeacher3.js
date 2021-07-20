import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";
import img1 from "../../../../docs/assets/img/Status=Empty, Ranking=1.jpg";
//Dinamism
const ReviewTeacher3 = () => {
	const history = useHistory();
	return (
		<div className="reviewTeacher3 mx-auto">
			<div className="d-flex">
				<img alt="foto" />
				<div>
					<span>nameteacher</span>
					<span>nameUniversity</span>
				</div>
			</div>

			<h1 className="">Dinamismo en sus clases</h1>
			<a>
				<img className="icons-review" src={img1} />
			</a>
			<button
				className="button_violet_small button__search"
				onClick={() => history.push("/reviewteacher/id/university/pasion")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher3;
