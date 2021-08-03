import React, { useEffect, useState } from "react";
import "../../styles/teacherprofile.scss";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import Faces from "../component/Faces/Faces";
import TopReview from "../component/TopReview/TopReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const TeacherProfile = () => {
	const history = useHistory();
	const [count, setCount] = useState(0);
	const [data, setData] = useState({});
	const [review, setReview] = useState([]);
	const [media, setMedia] = useState(0);
	const [avgDynanism, setAvgDynamism] = useState(0);
	const user_id = localStorage.getItem("id_user");

	let teacherId = localStorage.getItem("teacher_id");

	console.log("user.id ", user_id);
	console.log("teacher_id", teacherId);
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/user/" + user_id)
			.then(res => res.json())
			.then(json => {
				setData(json);
			});
	}, []);

	// useEffect(() => {
	// 	fetch(process.env.BACKEND_URL + "/review/" + teacher_id)
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			console.log("json2", json);
	// 			setReview(json);
	// 			// console.log("userTeacher", userTeacher);
	// 		});
	// }, []);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/reviews")
			.then(res => res.json())
			.then(json => {
				setReview(json);
				// console.log("userTeacher", userTeacher);
			})
			.catch(err => console.log("Error:", error));
	}, []);
	// console.log("data", data);
	console.log("review", review);
	// console.log(review.length > 0 ? review[0].near : "nooo");

	useEffect(
		() => {
			const avgFaces = () => {
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
				setCount(contReviews);
				return avg;
			};
			if (review.length > 0) {
				setMedia(avgFaces());
			}
		},
		[review]
	);

	useEffect(
		() => {
			const valorations = () => {
				console.log("holaaaaaaaa");
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
				const valorDynamism = dynamsim / contReviews;
				console.log("valordinam", valorDynamism);
				const avg = sum / (4 * contReviews);
				setCount(contReviews);
				return avg;
			};
			if (review.length > 0) {
				// setAvgDynamism(valorDynamism);
				// console.log("valordinam", avgDynanism);
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
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-1" />
				<div className="col-5 col-lg-8">
					<img className="img-profile" src={data.img} alt="img" />
				</div>
				<div className="col-7 col-lg-2 mt-2 contain__1">
					<div className="d-flex mt-5">
						<Faces face={media} />
					</div>
					<span className="span-reviews ml-3">{count} reviews</span>
					<button className="butt-on1 mt-2 mr-5" onClick={() => history.push("teacherprofile/edit")}>
						Editar perfil
					</button>
				</div>
				<div className="col-lg-1" />
			</div>

			<div className="row">
				<div className="col-lg-1" />
				<div className="col-12 mt-4 col-lg-8">
					<h1 className=" name1">{data.full_name}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-1" />
				<div className="col-12 col-lg-11">
					<FontAwesomeIcon className="icon-bag mr-2" icon={faSuitcase} />
					<span>profesor@ de {data.type_of_teacher}</span>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<h2 className="title___2 title-2-v ">Valoración</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="image-valoration">
						{/* T = teacher
					O = others teachers */}
						<TeacherAssessment
							dinamismoT={0.2}
							dinamismoO={2}
							pasionT={3}
							pasionO={4}
							exampleT={5}
							exampleO={6}
							inolvementT={7}
							inolvementO={10}
						/>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-1" />
				<div className="col-12 col-lg-10">
					<h2 className="title___2 mb-5">Reviews destacadas</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-3" />
				<div className="col-12 col-lg-6 contain-reviews d-flex">
					<TopReview faceTopreview={10} valorationTopreview={54} opinionTopreview="hola que tal" />
					<TopReview faceTopreview={10} valorationTopreview={0} />
					<TopReview faceTopreview={10} valorationTopreview={100} opinionTopreview="hola que tal" />
				</div>
				<div className="col-lg-3" />
			</div>

			<div className="row">
				<div className="col-12">
					<button className="button2 b-2-r">Ver todas las reviews</button>
				</div>
			</div>
		</div>
	);
};

export default TeacherProfile;
