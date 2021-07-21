import React, { useState } from "react";
import "../../styles/reviewteacher.scss";
import ReviewTeacherIcons from "../component/ReviewT/ReviewTeacherIcons";
import CardReviewTeacher from "../component/ReviewT/CardReviewTeacher";

const ReviewTeacher1 = () => {
	const [searchItem, setSearchItem] = useState("");
	const [step, setStep] = useState(1);
	const fakeData = [
		{
			name: "franc",
			age: 18
		},
		{
			name: "francisco",
			age: 18
		}
	];

	if (step == 1) {
		return (
			<div className="mx-auto reviewTeacher1">
				<h1 className="violet_h1 search-title">Buscar profesor</h1>
				<span className="span__ ">¿Qué profesor quieres evaluar?</span>
				<input
					type="text"
					placeholder="Buscar un profesor"
					className="input-searchbar"
					onChange={e => setSearchItem(e.target.value)}
				/>
				{/* <span className="span__1"> {props.span1}</span> */}
				{fakeData
					.filter(v => {
						if (searchItem === "") {
							return v;
						} else if (v.name.toLowerCase().includes(searchItem.toLowerCase())) {
							return v;
						}
					})
					.map((v, i) => {
						return <div key={i}>{v.name}</div>;
					})}
				<button className="button_violet_small button__search" onClick={() => setStep(2)}>
					Siguiente
				</button>
			</div>
		);
	} else if (step == 2) {
		return (
			<div className="mx-auto reviewTeacher2">
				<h1 className="violet_h1 search-title">Buscar profesor</h1>
				<span className="span__ ">¿En qué centro tuviste clase con Lucía?</span>
				<button className="button_violet_small button__search" onClick={() => setStep(3)}>
					Siguiente
				</button>
			</div>
		);
	} else if (step == 3) {
		return (
			<div className="mx-auto">
				<CardReviewTeacher title="titleeee" body={<ReviewTeacherIcons />} />
			</div>
		);
	} else {
		return <div>noooooooo</div>;
	}
};

export default ReviewTeacher1;
