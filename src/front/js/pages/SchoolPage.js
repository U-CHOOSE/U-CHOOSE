import React, { useEffect, useState, useContext } from "react";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import { useParams } from "react-router-dom";
import Faces from "../component/Faces/Faces";
const SchoolPage = () => {
	const params = useParams();
	const id = params.id;
	console.log("params", params.id);
	const [school, setSchool] = useState("");
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/school/" + id)
			.then(res => res.json())
			.then(json => setSchool(json));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<img src={school.img} />
					<h3>{school.name}</h3>
				</div>
				<div className="col-md-10">
					<Faces />
				</div>
				<div className="col-md-2">
					<span>126 reviews de sus profesores</span>
				</div>
			</div>

			<button className="button_marino_great" onClick={() => alert("Funcion no disponible")}>
				Hacer una review
			</button>
			<div className="row">
				<div className="col-md-12">
					<h1 className="title_teachers">Evaluación de su professores</h1>
				</div>
			</div>

			<TeacherAssessment name="Kilian Mbappe" />
			<button className="button_white_border_violet_great"> Ver listado de professores</button>
			<div className="row">
				<div col-md-12>
					<h4 className="top_rated">Top rated</h4>
				</div>
				<div className="col-md-8">review card</div>
				<div className="row">
					<div className="col-md-12">
						<h2 className="highlight_reviews">Reviews Destacadas</h2>
					</div>
					<div className="col-md-12">Reviews card (img)</div>
					<button className="button_white_border_violet_great" onClick={() => alert("Funcion no disponible")}>
						Ver todas las reviews
					</button>
				</div>
			</div>
		</div>
	);
};

export default SchoolPage;
