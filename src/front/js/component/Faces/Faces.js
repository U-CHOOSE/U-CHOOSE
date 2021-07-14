import React, { useState } from "react";
import "../Faces/Faces.scss";
import PropTypes from "prop-types";
//images
import img1white from "../../../../../docs/assets/img/Status=Empty, Ranking=1.jpg";
import img2white from "../../../../../docs/assets/img/Status=Empty, Ranking=2.jpg";
import img3white from "../../../../../docs/assets/img/Status=Empty, Ranking=3.jpg";
import img4white from "../../../../../docs/assets/img/Status=Empty, Ranking=4.jpg";
import img5white from "../../../../../docs/assets/img/Status=Empty, Ranking=5.jpg";
const Faces = props => {
	switch (note) {
		case 0:
			return <img />;
		default:
			return "foo";
	}
	return (
		<div>
			<h1>holaaa</h1>
			<img className="imagen" src={img1} />
		</div>
	);
};

export default Faces;
