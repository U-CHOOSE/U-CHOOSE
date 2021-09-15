import React, { useEffect, useState, useContext } from "react";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import { useParams } from "react-router-dom";
import Faces from "../component/Faces/Faces";
import TopRated from "../component/TopRated/TopRated";
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
		<div className="container-fluid">
			<div className="row px-0">
				<div className="col-12 px-0 caja">
					<img className="img_center" src={school.img} />
					<h3 className="school_name">{school.name}</h3>
				</div>
			</div>
			{/*  */}
			<div className="row px-0">
				<div className="col-12 text-center">
					<button className="button_marino_great ba_1 mt-5" onClick={() => alert("Funcion no disponible")}>
						Hacer una review
					</button>
				</div>
			</div>
			{/*  */}
			<div className="row px-0">
				<div className="col-7 ">
					<Faces />
				</div>
				<div className="col-5 ">
					<span className="span_rev">126 reviews de sus profesores</span>
				</div>
			</div>
			{/*  */}
			<div className="row">
				<div className="col-12 ">
					<h1 className="title_teachers mt-5">Evaluación de su profesores</h1>
				</div>
			</div>
			{/*  */}
			<div className="row">
				<div className="col-12 mt-5">
					<TeacherAssessment name={school.name} name_others="Media otros centros" />
				</div>
			</div>
			{/*  */}
			<div className="row">
				<div className="col-12 mt-5">
					<button className="button_white_border_violet_great"> Ver listado de professores</button>
				</div>
			</div>
			{/*  */}
			<div className="row">
				<div className="col-12 mt-5">
					<h4 className="top_rated">Top rated</h4>
					<TopRated />
				</div>
			</div>

			<div className="row">
				<div col-md-12 />
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
