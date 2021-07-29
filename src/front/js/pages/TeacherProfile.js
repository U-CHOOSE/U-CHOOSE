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
	const user_id = localStorage.getItem("id_user");
	const teacher_id = localStorage.getItem("teacher_id");
	let teacherId = 2;
	// console.log(user_id.id);
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/user/" + user_id)
			.then(res => res.json())
			.then(json => {
				setData(json);
				console.log("json1", json);
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
				console.log("json2", json);
				setReview(json);
				// console.log("userTeacher", userTeacher);
			});
	}, []);

	console.log("review", review);
	const avgFaces = () => {
		let dynamsim = 0;
		let pasion = 0;
		let near = 0;
		let practises_example = 0;
		for (let i = 0; i <= review.length; i++) {
			if (review[i].teacher_id === teacher_id) {
				dynamsim = review[i].dynamsim + dynamsim;
				pasion = review[i].pasion + pasion;
				near = review[i].near + near;
				practises_example = review[i].practises_example + practises_example;
			}
		}
		let sum = dynamsim + passion + near + practises_example;
		let avg = sum / 4;
		return avg;
	};

	// console.log(""pasion);
	// let sum = review.dynamsim + review.pasion + review.practises_example + review.near;
	// let avg = sum / 4;
	// console.log("avg", avg);

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
		<div className="card__teacherprofile">
			{/* contain 1 */}
			<div className="contain1 mt-4">
				<div className="row">
					<div className="col-xs-5 col-lg-4">
						<img
							className="img-profile"
							src="https://rociohernandezcruz.com/wp-content/uploads/2019/11/rocio-hernandez-cruz-2.jpg"
							alt="img"
						/>
					</div>
					<div className="col-7">
						<div className="d-flex mt-3 ml-3">
							<Faces face={10} />
						</div>
						<span className="span-reviews">{count} reviews</span>
						<button className="button1 mt-2" onClick={() => history.push("teacherprofile/edit")}>
							Editar perfil
						</button>
					</div>
				</div>
				<h1 className=" name1 ml-3 mt-4">maria zaidin</h1>
				<div className="d-flex ml-3 contain-logo">
					<h5 className="mr-3">
						<FontAwesomeIcon className="icon-bag" icon={faSuitcase} />
					</h5>
					<span>profesor de matematicas</span>
				</div>
			</div>
			{/* contain 2 */}
			<div className="contain___2 mb-5">
				<h2 className="title___2 ">Valoración</h2>
				<div className="image-valoration mt-3">
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
			<div className="mx-auto">
				<h2 className="title2 mb-5">Reviews destacadas</h2>
				{/* reviews */}
				<div className="contain-reviews d-flex">
					<TopReview faceTopreview={10} valorationTopreview={54} opinionTopreview="hola que tal" />
					<TopReview faceTopreview={10} valorationTopreview={0} />
					<TopReview faceTopreview={10} valorationTopreview={100} opinionTopreview="hola que tal" />
				</div>

				<button className="button2">Ver todas las reviews</button>
			</div>
		</div>
	);
};

export default TeacherProfile;
