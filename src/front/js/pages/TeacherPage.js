import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import Faces from "../component/Faces/Faces";
import { useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import TopReview from "../component/TopReview/TopReview";
const TeacherPage = () => {
	const { actions } = useContext(Context);
	const [teacher, setTeacher] = useState("");
	const [review, setReview] = useState("");
	const params = useParams();
	const id = params.id;
	const history = useHistory();
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/teacher/" + id)
			.then(res => res.json())
			.then(json => setTeacher(json));
	}, []);
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/review/" + id)
			.then(res => res.json())
			.then(json => {
				console.log(json);
				setReview(json);
			});
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
					{actions.isLogged() ? (
						<button
							className="butt-on1 mt-2 mr-5"
							onClick={() => {
								history.push("/reviewteacher");
							}}>
							Hacer review
						</button>
					) : (
						<button
							className="butt-on1 mt-2 mr-5"
							onClick={() => {
								alert("Necessitas estar loggeado para hacer una review");
								history.push("/login");
							}}>
							Hacer review
						</button>
					)}
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
			<div className="row">
				<div className="col-12  contain-reviews d-flex">
					{review &&
						review.map((v, i) => {
							return <TopReview key={i} opinionTopreview={v.more_info} />;
						})}
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

export default TeacherPage;
