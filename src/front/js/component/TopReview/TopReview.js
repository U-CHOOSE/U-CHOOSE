import React, { useState } from "react";
import "../TopReview/TopReview.scss";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
const TopReview = props => {
	return (
		<div className="container-review">
			<div className="container-puntuation" />
		</div>
	);
};

TopReview.propTypes = {
	// dinamismoT: PropTypes.number,
	// dinamismoO: PropTypes.number,
	// pasionT: PropTypes.number,
	// pasionO: PropTypes.number,
	// exampleT: PropTypes.number,
	// exampleO: PropTypes.number,
	// inolvementT: PropTypes.number,
	// inolvementO: PropTypes.number
};
export default TopReview;
