import React, { useState } from "react";
import "../TopReview/TopReview.scss";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
import Faces from "../Faces/Faces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const TopReview = props => {
	return (
		<div className="container-review">
			<div className="container-puntuation">
				<Faces face={props.faceTopreview} />
				<FontAwesomeIcon className="icon-ok" icon={faThumbsUp} />
			</div>
			<span>{props.valorationTopreview}</span>
			<p className="mx-auto">{props.opinionTopreview}</p>
			<button className="mx-auto mt-2">Ver review</button>
		</div>
	);
};

TopReview.propTypes = {
	faceTopreview: PropTypes.number,
	valorationTopreview: PropTypes.number,
	opinionTopreview: PropTypes.text
};
export default TopReview;
