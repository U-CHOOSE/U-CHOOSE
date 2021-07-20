import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher7 = () => {
	const history = useHistory();
	const option = () => {
		for (let i = 1900; i < 2021; i++) {
			return <option value={i}>{i}</option>;
		}
	};
	return (
		<div className="reviewTeacher3 mx-auto">
			<div className="d-flex">
				<img alt="foto" />
				<div>
					<span>nameteacher</span>
					<span>nameEstudios</span>
				</div>
			</div>

			<h1 className="">¿Cuando tuviste clase?</h1>
			<div className="dropdown">
				<select name="year">
					{/* {for (var i=1990; i<2021; i++ )} */}
					{option()}
					{/* <option value="1990">1990</option>
					<option value="2000">2000</option>
					<option value="2010">2010</option>
					<option value="2020">2020</option> */}
				</select>
			</div>
			<button
				className="button_violet_small button__search"
				onClick={() =>
					history.push("/reviewteacher/id/university/pasion/examples/implication/year/anythingelse")
				}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher7;
