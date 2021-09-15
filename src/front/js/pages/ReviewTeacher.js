import React, { useState, useContext, useEffect } from "react";
import "../../styles/reviewteacher.scss";
import ReviewTeacherIcons from "../component/ReviewT/ReviewTeacherIcons";
import CardReviewTeacher from "../component/ReviewT/CardReviewTeacher";
import { Context } from "../store/appContext";
import Search from "../component/Search/Search";
import reviewok from "../../../../docs/assets/img/review-ok.png";
import { useParams } from "react-router-dom";

const ReviewTeacher = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [step, setStep] = useState(1);
	const [dataUser, setDateUser] = useState({});
	const [dateSchool, setDateSchool] = useState({});
	const [userSchools, setUserSchools] = useState("");
	const [detail, setDetail] = useState("");
	//dropdown date_teacher=selectOption
	const [selectOption, setTSelectOption] = useState(0);
	//textaerea
	const [moreInfo, setTMoreInfo] = useState("Comienza a escribir");
	const idOfTeacher = params.id;
	//search
	const [data, setData] = useState("");
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			alert("Hola");
		}
	};
	// useEffect(
	// 	() => {
	// 		fetch(process.env.BACKEND_URL + "/teacher/review")
	// 			.then(res => res.json())
	// 			.then(data => setData(data));
	// 	},
	// 	[!data]
	// );
	const [checked, setChecked] = useState({
		yes: false,
		no: false
	});
	useEffect(
		() => {
			fetch(process.env.BACKEND_URL + "/users/" + idOfTeacher + "/schools")
				.then(res => res.json())
				.then(data => setUserSchools(data));
		},
		[!data]
	);
	console.log("teacherId", idOfTeacher);
	useEffect(() => {
		const token = actions.getToken();
		fetch(process.env.BACKEND_URL + "/teacher/review", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(json => {
				setData(json);
				console.log(json);
			});
	}, []);
	console.log("data_user", detail);
	const userId = store.userId;
	console.log("teacher id", userId);

	const getUser = () => {
		fetch(process.env.BACKEND_URL + "/user/" + userId)
			.then(res => res.json())
			.then(request => setdetail(request));
	};
	console.log(data, "data");
	console.log(store.userId);
	// const getSchool= () => {
	// 	fetch(process.env.BACKEND_URL + "/school/{data.user_id")
	// 		.then(res => res.json())
	// 		.then(request => setDateSchool(request));
	// };

	const sendReview = () => {
		const token = actions.getToken();
		fetch(process.env.BACKEND_URL + "/review", {
			method: "POST",
			body: JSON.stringify(store.reviews), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(res => res.json())
			.catch(error => console.error("Error:", error))
			.then(response => console.log("Success:", response));
	};

	if (step == 1) {
		console.log("data", data);
		return (
			<div className="container-fluid mx-auto ">
				<Search
					title="Buscar un profesor"
					placeholder="Buscar un profesor"
					span_="¿Que profesor quieres evaluar?"
					type="teacher"
					data={data}
					onKeyPress={handleKeyPress}
					button={x => {
						actions.setReview("teacher_id", store.idTeacher);
						setStep(2);
						setDetail(x);
						console.log(x, "fsdsffdfsd");
					}}
				/>
			</div>
		);
	} else if (step == 2) {
		{
			data && data.map((v, i) => {});
		}
		return (
			<div className=" reviewTeacher2">
				<h1 className="search-title">Buscar profesor</h1>
				<span className="span__0 ">¿En qué centro tuviste clase con {detail.full_name}?</span>
				<div className="cont_name_img d-flex mt-5">
					<img src={detail.img} />
					<div>
						<div className="teacher__fullname">{detail.full_name}</div>
						<div className="teacher__typeteacher">Profesor@ de {detail.type_of_teacher}</div>
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
					srcImg={detail.img}
					title="Dinamismo en sus clases"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
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
					srcImg={detail.img}
					title="Pasión por la materia"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
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
					srcImg={detail.img}
					title="Utiliza ejemplos prácticos"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
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
					srcImg={detail.img}
					title="Implicación y cercanía"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
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
					srcImg={detail.img}
					title="¿Cuándo tuviste clase?"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
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
					srcImg={detail.img}
					title="¿Algo más?"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
					body={<textarea onChange={e => setTMoreInfo(e.target.value)} placeholder={moreInfo} />}
					button="
					Siguiente"
					onClick={() => {
						actions.setReview("more_info", moreInfo);
						setStep(9);
						// sendReview();
						console.log(store.reviews);
					}}
				/>
			</div>
		);
	} else if (step == 10) {
		return (
			<div className="mx-auto step-9">
				<img src={reviewok} />
				<h1 className="">¡Gracias!</h1>
				<p>
					Tu review se ha registrado correctamente.{" "}
					<span className="font-weight-bold">¿Por qué hacer una review de otro profesor?</span>
				</p>
			</div>
		);
	} else if (step == 9) {
		return (
			<div className="mx-auto step-8">
				<CardReviewTeacher
					srcImg={detail.img}
					title="¿Quieres que tu review sea anónima?"
					name={detail.full_name}
					nameUniversity={detail.mySchool.name}
					body={
						<>
							<label className="containerLabel" htmlFor="yes">
								<input
									className="input mx-auto"
									type="radio"
									value={true}
									id="yes"
									checked={checked.yes}
									onClick={() =>
										setChecked({
											no: false,
											yes: !checked.yes
										})
									}
								/>
								Si
							</label>
							<label className="containerLabel" htmlFor="no">
								<br />{" "}
								<input
									className="input mx-auto"
									type="radio"
									value={true}
									id="no"
									checked={checked.no}
									onClick={() =>
										setChecked({
											no: !checked.no,
											yes: false
										})
									}
								/>
								No
							</label>
						</>
					}
					button="Enviar Review"
					onClick={() => {
						actions.setReview("anonymous", checked);
						setStep(10);
						sendReview();
						console.log(store.reviews);
					}}
				/>
			</div>
		);
	}
};
export default ReviewTeacher;
