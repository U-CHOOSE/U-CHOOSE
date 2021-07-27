import React, { useState } from "react";
import "../TeacherAssessment/TeacherAssessment.scss";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
const TeacherAssessment = props => {
	const dT = props.dinamismoT * 10;
	const dO = props.dinamismoO * 10;
	const pT = props.pasionT * 10;
	const pO = props.pasionO * 10;
	const eT = props.exampleT * 10;
	const eO = props.exampleO * 10;
	const iT = props.inolvementT * 10;
	const iO = props.inolvementO * 10;

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
					<span style={{ width: dT + "%" }} className="value1" />
					<span style={{ width: dO + "%" }} className="value2" />
				</div>
			</div>

			<div className="d-flex contain3">
				<div className="key">Pasión por la materia</div>
				<div className="contain-values">
					<span style={{ width: pT + "%" }} className="value1" />
					<span style={{ width: pO + "%" }} className="value2" />
				</div>
			</div>

			<div className="d-flex contain4">
				<div className="key">Ejemplos prácticos</div>
				<div className="contain-values">
					<span style={{ width: eT + "%" }} className="value1" />
					<span style={{ width: eO + "%" }} className="value2" />
				</div>
			</div>

			<div className="d-flex contain5">
				<div className="key">Implicación y cercanía</div>
				<div className="contain-values">
					<span style={{ width: iT + "%" }} className="value1" />
					<span style={{ width: iO + "%" }} className="value2" />
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
		</div>
	);
};

TeacherAssessment.propTypes = {
	dinamismoT: PropTypes.number,
	dinamismoO: PropTypes.number,
	pasionT: PropTypes.number,
	pasionO: PropTypes.number,
	exampleT: PropTypes.number,
	exampleO: PropTypes.number,
	inolvementT: PropTypes.number,
	inolvementO: PropTypes.number
};
export default TeacherAssessment;
