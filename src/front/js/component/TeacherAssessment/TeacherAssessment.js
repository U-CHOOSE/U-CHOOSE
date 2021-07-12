import React from "react";
import "../TeacherAssessment/TeacherAssessment.scss";
import PropTypes from "prop-types";
const TeacherAssessment = props => {
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
			<div className="contain2">
				<div className="d-flex">
					<div className="key">Dinamismo en sus clases</div>
					<div className="contain-values">
						<span className="value1"> </span>
						<span className="value2" />
					</div>
				</div>
			</div>
			<div className="contain3">
				<div className="d-flex">
					<div className="key">Dinamismo en sus clases</div>
					<div className="contain-values">
						<span className="value1"> </span>
						<span className="value2" />
					</div>
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
