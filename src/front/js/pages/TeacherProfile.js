import React, { useEffect, useState, useContext } from "react";
import "../../styles/teacherprofile.scss";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import Faces from "../component/Faces/Faces";
import TopReview from "../component/TopReview/TopReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const TeacherProfile = () => {
	const { actions, store } = useContext(Context);
	const history = useHistory();
	const [count, setCount] = useState(0);
	const [data, setData] = useState({});
	const [review, setReview] = useState([]);
	const [media, setMedia] = useState({});
	const [mediaOthersTeachers, setMediaOthersTeachers] = useState({});

	// const [avgDynanism, setAvgDynamism] = useState(0);
	// const user_id = localStorage.getItem("id_user");
	console.log("store.idteacher", store.idTeacher);
	let teacherId = store.idTeacher;
	useEffect(() => {
		const token = actions.getToken();
		fetch(process.env.BACKEND_URL + "/user", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(json => {
				setData(json);
				actions.setImg(json.img);
				console.log(json);
			});
	}, []);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/reviews")
			.then(res => res.json())
			.then(json => {
				setReview(json);
			})
			.catch(err => console.log("Error:", err));
	}, []);
	console.log("review", review);

	useEffect(
		() => {
			const avgTeacher = () => {
				let dynamsim = 0;
				let passion = 0;
				let near = 0;
				let practises_example = 0;
				let contReviews = 0;

				for (let i = 0; i < review.length; i++) {
					if (review[i].teacher_id === parseInt(teacherId)) {
						dynamsim = review[i].dynamsim + dynamsim;
						passion = review[i].pasion + passion;
						near = review[i].near + near;
						practises_example = review[i].practises_example + practises_example;
						contReviews++;
					}
				}
				const sum = dynamsim + passion + near + practises_example;
				const avg = sum / (4 * contReviews);
				const avgDynamism = dynamsim / contReviews;
				const avgPassion = passion / contReviews;
				const avgNear = near / contReviews;
				const avgPractisesExample = practises_example / contReviews;
				const avgTotal = {
					avg: avg,
					avgDynamism: avgDynamism,
					avgPassion: avgPassion,
					avgNear: avgNear,
					avgPractisesExample: avgPractisesExample
				};
				setCount(contReviews);
				return avgTotal;
			};
			if (review.length > 0) {
				setMedia(avgTeacher());
				console.log("media", media);
			}
		},
		[review]
	);

	useEffect(
		() => {
			const avgOthersTeacher = () => {
				let dynamsim = 0;
				let passion = 0;
				let near = 0;
				let practises_example = 0;
				let contReviews = 0;

				for (let i = 0; i < review.length; i++) {
					if (review[i].teacher_id != parseInt(teacherId)) {
						dynamsim = review[i].dynamsim + dynamsim;
						passion = review[i].pasion + passion;
						near = review[i].near + near;
						practises_example = review[i].practises_example + practises_example;
						contReviews++;
					}
				}

				const avgDynamism = dynamsim / contReviews;
				const avgPassion = passion / contReviews;
				const avgNear = near / contReviews;
				const avgPractisesExample = practises_example / contReviews;
				const avgTotal = {
					avgDynamism: avgDynamism,
					avgPassion: avgPassion,
					avgNear: avgNear,
					avgPractisesExample: avgPractisesExample
				};
				return avgTotal;
			};
			if (review.length > 0) {
				setMediaOthersTeachers(avgOthersTeacher());
				console.log("media others", mediaOthersTeachers);
			}
		},
		[review]
	);

	//Component Faces
	// <Faces face={number} /> 1-10

	//Component TeacherAssessment
	//<TeacherAssessment
	// 	dinamismoT={0.2}
	// 	dinamismoO={2}
	// 	pasionT={3}
	// 	pasionO={4}
	// 	exampleT={5}
	// 	exampleO={6}
	// 	inolvementT={7}
	// 	inolvementO={9.5}
	// />

	// Number reviewsTeacher
	// {count} number

	//Component TopReview
	// <TopReview faceTopreview={number}1-10 valorationTopreview={number} opinionTopreview = text
	return (
		<div className="container">
			<div className="row mt-lg-5">
				<div className="col-6 col-lg-4 cont__img__profile">
					<img className="img__profile" src={data.img} alt="img" />
					<h1 className="">{data.full_name}</h1>
					<div className="d-flex">
						<FontAwesomeIcon className="icon-bag mr-2" icon={faSuitcase} />
						<p>profesor@ de {data.type_of_teacher}</p>
					</div>
				</div>
				<div className="col-6 col-lg-3  mt-2 contain__1">
					<div className="d-flex mt-5">
						<Faces face={media.avg} />
					</div>
					<p className="span-reviews">{count} reviews</p>
					<button className="butt-on1  " onClick={() => history.push("teacherprofile/edit")}>
						Editar perfil
					</button>
				</div>
				<div className="col-lg-5">
					<h1 className="hola">
						<TeacherAssessment
							name={data.full_name}
							dinamismoT={media.avgDynamism}
							dinamismoO={mediaOthersTeachers.avgDynamism}
							pasionT={media.avgPassion}
							pasionO={mediaOthersTeachers.avgPassion}
							exampleT={media.avgPractisesExample}
							exampleO={mediaOthersTeachers.avgPractisesExample}
							inolvementT={media.avgNear}
							inolvementO={mediaOthersTeachers.avgNear}
						/>
					</h1>
				</div>
			</div>

			{/* <div className="row">
				<div className="col-12 mt-4">
					<h1 className=" name1">{data.full_name}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<FontAwesomeIcon className="icon-bag mr-2" icon={faSuitcase} />
					<span>profesor@ de {data.type_of_teacher}</span>
				</div>
			</div> */}

			<div className="row">
				<div className="col-12">
					<h2 className="title___2 title-2-v ">Valoración</h2>
				</div>
			</div>
			<div className="row ">
				<div className="col-12">
					<div className="image-valoration">
						{/* T = teacher
						O = others teachers */}
						{console.log("mediaaa", media)}
						{console.log("media others", mediaOthersTeachers)}
						{console.log("data", data)}
						<TeacherAssessment
							name={data.full_name}
							dinamismoT={media.avgDynamism}
							dinamismoO={mediaOthersTeachers.avgDynamism}
							pasionT={media.avgPassion}
							pasionO={mediaOthersTeachers.avgPassion}
							exampleT={media.avgPractisesExample}
							exampleO={mediaOthersTeachers.avgPractisesExample}
							inolvementT={media.avgNear}
							inolvementO={mediaOthersTeachers.avgNear}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-lg-6  ">
					<h2 className="title___2 mb-5">Reviews destacadas</h2>
				</div>
				<div className=" col-lg-6 no_desktop ">
					<button className="button__reviews__desktop">Ver todas las reviews</button>
				</div>
			</div>

			<div className="row">
				<div className="col-12  contain-reviews d-flex">
					<TopReview faceTopreview={10} valorationTopreview={54} opinionTopreview="hola que tal" />
					<TopReview faceTopreview={10} valorationTopreview={0} />
					<TopReview faceTopreview={10} valorationTopreview={100} opinionTopreview="hola que tal" />
				</div>
			</div>

			<div className="row">
				<div className="col-12 ">
					<button className="button2 b-2-r">Ver todas las reviews</button>
				</div>
			</div>
		</div>
	);
};

export default TeacherProfile;
