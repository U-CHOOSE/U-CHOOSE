import React, { useEffect, useState } from "react";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import Faces from "../component/Faces/Faces";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
const TeacherPage = () => {
	const [teacher, setTeacher] = useState("");
	const params = useParams();
	const id = params.id;
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/teacher/" + id)
			.then(res => res.json())
			.then(json => setTeacher(json));
	}, []);
	return (
		<div>
			<div className="row">
				<div className="col-lg-1" />
				<div className="col-5 col-lg-8">
					<img className="img-profile" src={teacher.img} alt="img" />
				</div>
				<div className="col-7 col-lg-2 mt-2 contain__1">
					<div className="d-flex mt-5">
						<Faces />
					</div>
					<span className="span-reviews ml-3">126 reviews</span>
					<button className="butt-on1 mt-2 mr-5">Hacer review</button>
				</div>
				<div className="col-lg-1" />
			</div>
			<div className="row">
				<div className="col-lg-1" />
				<div className="col-12 mt-4 col-lg-8">
					<h1 className=" name1">{teacher.full_name}</h1>
				</div>
				<div className="row">
					<div className="col-12 ">
						<FontAwesomeIcon className="icon-bag mx-4" icon={faSuitcase} />
						<span>{teacher.type_of_teacher}</span>
					</div>
				</div>
				<h1>Valoración</h1>
			</div>
			<div className="container-fluid" />
			<TeacherAssessment name="Kilian Mbappe" />
		</div>
	);
};

export default TeacherPage;
