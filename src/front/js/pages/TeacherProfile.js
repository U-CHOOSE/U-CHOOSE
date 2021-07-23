import React, { useEffect, useState } from "react";
import "../../styles/teacherprofile.scss";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import Faces from "../component/Faces/Faces";
import TopReview from "../component/TopReview/TopReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

const TeacherProfile = () => {
	const history = useHistory();
	const [count, setCount] = useState(0);
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
		<div>
			{/* contain 1 */}
			<div className="contain1 mt-4">
				<div className="row">
					<div className="col-5">
						<img
							className="img-profile"
							src="https://laverdadnoticias.com/__export/1577809178240/sites/laverdad/img/2019/12/31/1465326837-rt-shakira01.jpg_1017309733.jpg"
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
				<h1 className=" name1 ml-3 mt-4">Lucía Gómez</h1>
				<div className="d-flex ml-3 contain-logo">
					<h5 className="mr-3">
						<FontAwesomeIcon className="icon-bag" icon={faSuitcase} />
					</h5>
					<span>Financial Advisor @ AXA</span>
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
