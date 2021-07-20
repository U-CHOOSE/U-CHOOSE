import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher7 = () => {
	const history = useHistory();
	var today = new Date();
	var year = today.getFullYear();

	const optionDropdown = () => {
		let listOption = [];
		for (let i = year; i >= 1950; i--) {
			listOption.push(<option value={i}>{i}</option>);
		}
		return listOption;
	};
	const option = optionDropdown();
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
				<select name="year" className="options">
					{option}
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
