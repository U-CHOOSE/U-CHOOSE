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
	const [userTeacher, setUserTeacher] = useState("");
	const user_id = localStorage.getItem("id_user");
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/user/" + 2)
			.then(res => res.json())
			.then(json => {
				setData(json);
				console.log("json", json);
				console.log("DataUser", data);
				// console.log("id", data.id);
			});
	}, []);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/review/" + data.id)
			.then(res => res.json())
			.then(json => {
				// console.log("item", json);
				// console.log("userTeacher", userTeacher);
			});
	}, []);

	// useEffect(() => {
	// 	fetch(process.env.BACKEND_URL + "/user_teachers")
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			json.map(item => {
	// 				if (item.id == user_id) {
	// 					setUserTeacher(json);
	// 				}
	// 			});
	// 			console.log(userTeacher);
	// 		});
	// }, []);

	// fetch(process.env.BACKEND_URL + "/user/" + user_id)

	// let sum = dataReview.dynamsim + dataReview.pasion + dataReview.practises_example + dataReview.near;
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
					<div className="col-5">
						<img className="img-profile" src={data.img} alt="img" />
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
				<h1 className=" name1 ml-3 mt-4">{data.full_name}</h1>
				<div className="d-flex ml-3 contain-logo">
					<h5 className="mr-3">
						<FontAwesomeIcon className="icon-bag" icon={faSuitcase} />
					</h5>
					<span>{data.type_of_teacher}</span>
				</div>
			</div>
			{/* contain 2 */}
			<div className="contain2 mb-5">
				<h2 className="title2 ml-3">Valoración</h2>
				<div className="mx-3 mt-3">
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
						inolvementO={9.5}
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
