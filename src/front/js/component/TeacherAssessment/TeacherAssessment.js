import React, { useState } from "react";
import "../TeacherAssessment/TeacherAssessment.scss";
import PropTypes from "prop-types";
const TeacherAssessment = props => {
	const [dinamismoTeacher, setDinamismoTeacher] = useState("estadistic1Purple");
	const [dinamismoOthers, setDinamismoOthers] = useState("estadistic1Blue");
	const [pasionTeacher, setPasionTeacher] = useState("estadistic2Purple");
	const [pasionOthers, setPasionOthers] = useState("estadistic2Blue");
	const [involvementTeacher, setInvolvementTeacher] = useState("estadistic4Purple");
	const [involvementOthers, setInvolvementOthers] = useState("estadistic4Blue");

	return (
		<div className="contain">
			<div className="contain1">
				<div className="d-flex">
					<span className="color1" />
					<span className="name">Lucia Gómez</span>
				</div>
				<div className="d-flex">
					<span className="color2" />
					<span className="name others">Otros profesores</span>
				</div>
			</div>

			<div className="d-flex contain2">
				<div className="key">Dinamismo en sus clases</div>
				<div className="contain-values">
					<span className={dinamismoTeacher} />
					<span className="value2" />
				</div>
			</div>

			<div className="d-flex contain3">
				<div className="key">Pasión por la materia</div>
				<div className="contain-values">
					<span className={pasionTeacher}> </span>
					<span className="value2" />
				</div>
			</div>

			<div className="d-flex contain4">
				<div className="key">Ejemplos prácticos</div>
				<div className="contain-values">
					<span className="value1"> </span>
					<span className="value2" />
				</div>
			</div>

			<div className="d-flex contain5">
				<div className="key">Implicación y cercanía</div>
				<div className="contain-values">
					<span className="value1"> </span>
					<span className="value2" />
				</div>
			</div>
			<div className="contain-hr">
				<hr />
				<div className="contain-span">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
				</div>
			</div>

			<div>{props.name}</div>
		</div>
	);
};

TeacherAssessment.propTypes = {
	name: PropTypes.string
};
export default TeacherAssessment;
