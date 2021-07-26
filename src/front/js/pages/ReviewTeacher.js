import React, { useState, useContext, useEffect } from "react";
import "../../styles/reviewteacher.scss";
import ReviewTeacherIcons from "../component/ReviewT/ReviewTeacherIcons";
import CardReviewTeacher from "../component/ReviewT/CardReviewTeacher";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Search from "../component/Search/Search";

const ReviewTeacher = () => {
	const { store, actions } = useContext(Context);

	const [step, setStep] = useState(1);
	const [dateUser, setDateUser] = useState({});
	const [dateSchool, setDateSchool] = useState({});

	//dropdown date_teacher=selectOption
	const [selectOption, setTSelectOption] = useState(0);
	//textaerea
	const [moreInfo, setTMoreInfo] = useState("Comienza a escribir");

	//search
	const [data, setData] = useState("");
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			alert("Hola");
		}
	};
	useEffect(
		() => {
			fetch(process.env.BACKEND_URL + "/user_teachers")
				.then(res => res.json())
				.then(data => setData(data));
		},
		[!data]
	);

	const getUser = () => {
		fetch(process.env.BACKEND_URL + `/user/}`)
			.then(res => res.json())
			.then(request => setDateUser(request));
	};
	console.log(data, "data");
	console.log(store.userId);
	// const getSchool= () => {
	// 	fetch(process.env.BACKEND_URL + "/school/{data.user_id")
	// 		.then(res => res.json())
	// 		.then(request => setDateSchool(request));
	// };

	const sendReview = () => {
		fetch(process.env.BACKEND_URL + "/review", {
			method: "POST",
			body: JSON.stringify(store.reviews), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.catch(error => console.error("Error:", error))
			.then(response => console.log("Success:", response));
	};

	if (step == 1) {
		console.log("data", data);
		return (
			<div className="contain__search mx-auto">
				<Search
					title="Buscar un profesor"
					placeholder="Buscar un profesor"
					span_="¿Que profesor quieres evaluar?"
					type="teacher"
					data={data}
					onKeyPress={handleKeyPress}
				/>

				<button
					className="button_violet_small button__search"
					onClick={() => {
						// console.log("dtaID", item.id);
						// console.log(select);
						console.log("userID" + store.userId);
						console.log("idtecher", store.idTeacher);
						// actions.setReview("teacher_id", store.idTeacher);
						// setStep(2);
						// console.log("id", store.idTeacher);

						// // getUser();
						// console.log("datos user", dateUser);
					}}>
					Siguiente
				</button>
			</div>
		);
	} else if (step == 2) {
		return (
			<div className=" reviewTeacher2">
				<h1 className="violet_h1 search-title">Buscar profesor</h1>
				<span className="span__ ">¿En qué centro tuviste clase con {data.full_name}?</span>
				<div className="cont_name_img d-flex">
					<img src={dateUser.image} />
					<div>
						<span>{dateUser.full_name}</span>
						<span>{data.type_of_teacher}</span>
					</div>
					<div>{/* {dateSchool.name} */}</div>
				</div>
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
					body={<ReviewTeacherIcons step={3} />}
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
					body={<ReviewTeacherIcons step={4} />}
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
					body={<ReviewTeacherIcons step={5} />}
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
					body={<ReviewTeacherIcons step={6} />}
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
		console.log(store.reviews);

		const captureYear = e => {
			setTSelectOption(e.target.value);
		};

		return (
			<div className="mx-auto">
				<CardReviewTeacher
					srcImg="https://static9.depositphotos.com/1016026/1183/i/950/depositphotos_11839092-stock-photo-beautiful-smile.jpg"
					title="¿Cuándo tuviste clase?"
					name="Marta Diaz"
					nameUniversity="4Geeks Academy"
					body={
						<div className="dropdown">
							<select name="year" className="options" onChange={captureYear}>
								<option value="" disabled selected>
									Año
								</option>
								{option}
							</select>
						</div>
					}
					button="Siguiente"
					onClick={() => {
						actions.setReview("date_teacher", selectOption);
						setStep(8);
					}}
				/>
				{console.log(selectOption)}
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
					body={<textarea onChange={e => setTMoreInfo(e.target.value)} placeholder={moreInfo} />}
					button="Enviar Review"
					onClick={() => {
						actions.setReview("more_info", moreInfo);
						setStep(9);
						sendReview();
						console.log(store.reviews);
					}}
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
export default ReviewTeacher;
