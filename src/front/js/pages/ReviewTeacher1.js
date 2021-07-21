import React, { useState } from "react";
import "../../styles/reviewteacher.scss";
import ReviewTeacherIcons from "../component/ReviewT/ReviewTeacherIcons";
import CardReviewTeacher from "../component/ReviewT/CardReviewTeacher";
import { useHistory } from "react-router";

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
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="Dinamismo en sus clases"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={<ReviewTeacherIcons />}
					button="Siguiente"
					onClick={() => setStep(4)}
				/>
			</div>
		);
	} else if (step == 4) {
		return (
			<div className="mx-auto">
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="Pasión por la materia"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={<ReviewTeacherIcons />}
					button="Siguiente"
					onClick={() => setStep(5)}
				/>
			</div>
		);
	} else if (step == 5) {
		return (
			<div className="mx-auto">
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="Utiliza ejemplos prácticos"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={<ReviewTeacherIcons />}
					button="Siguiente"
					onClick={() => setStep(6)}
				/>
			</div>
		);
	} else if (step == 6) {
		return (
			<div className="mx-auto">
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="Implicación y cercanía"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={<ReviewTeacherIcons />}
					button="Siguiente"
					onClick={() => setStep(7)}
				/>
			</div>
		);
	} else if (step == 7) {
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
			<div className="mx-auto">
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="¿Cuándo tuviste clase?"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={
						<div className="dropdown">
							<select name="year" className="options">
								{option}
							</select>
						</div>
					}
					button="Siguiente"
					onClick={() => setStep(8)}
				/>
			</div>
		);
	} else if (step == 8) {
		return (
			<div className="mx-auto step-8">
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="¿Algo más?"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={<textarea placeholder="Comienza a escribir" />}
					button="Enviar Review"
					onClick={() => setStep(9)}
				/>
			</div>
		);
	} else if (step == 9) {
		return (
			<div className="mx-auto step-9">
				<h1 className="">¡Gracias!</h1>
				<p>Tu review se ha registrado correctamente. ¿Por qué hacer una review de otro profesor?</p>
			</div>
		);
	}
};

export default ReviewTeacher1;
