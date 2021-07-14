import React, { useState } from "react";
import "../Faces/Faces.scss";
import PropTypes from "prop-types";
//images
import img1empty from "../../../../../docs/assets/img/Status=Empty, Ranking=1.jpg";
import img2empty from "../../../../../docs/assets/img/Status=Empty, Ranking=2.jpg";
import img3empty from "../../../../../docs/assets/img/Status=Empty, Ranking=3.jpg";
import img4empty from "../../../../../docs/assets/img/Status=Empty, Ranking=4.jpg";
import img5empty from "../../../../../docs/assets/img/Status=Empty, Ranking=5.jpg";
import img1half from "../../../../../docs/assets/img/Status=Half, Ranking=1.jpg";
import img2half from "../../../../../docs/assets/img/Status=Half, Ranking=2.jpg";
import img3half from "../../../../../docs/assets/img/Status=Half, Ranking=3.jpg";
import img4half from "../../../../../docs/assets/img/Status=Half, Ranking=4.jpg";
import img5half from "../../../../../docs/assets/img/Status=Half, Ranking=5.jpg";
import img1full from "../../../../../docs/assets/img/Status=Full, Ranking=1.jpg";
import img2full from "../../../../../docs/assets/img/Status=Full, Ranking=2.jpg";
import img3full from "../../../../../docs/assets/img/Status=Full, Ranking=3.jpg";
import img4full from "../../../../../docs/assets/img/Status=Full, Ranking=4.jpg";
import img5full from "../../../../../docs/assets/img/Status=Full, Ranking=5.jpg";

const Faces = props => {
	let faces = Math.ceil(props.face);
	switch (faces) {
		case 0:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1empty} />
					<img className="img" src={img2empty} />
					<img className="img" src={img3empty} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 1:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1half} />
					<img className="img" src={img2empty} />
					<img className="img" src={img3empty} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 2:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2empty} />
					<img className="img" src={img3empty} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 3:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2half} />
					<img className="img" src={img3empty} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 4:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3empty} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 5:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3half} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 6:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3full} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 7:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3full} />
					<img className="img" src={img4half} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 8:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3full} />
					<img className="img" src={img4full} />
					<img className="img" src={img5empty} />
				</div>
			);
		case 9:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3full} />
					<img className="img" src={img4full} />
					<img className="img" src={img5half} />
				</div>
			);
		case 10:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3full} />
					<img className="img" src={img4full} />
					<img className="img" src={img5full} />
				</div>
			);
		default:
			return (
				<div className="cont" d-flex>
					<img className="img" src={img1full} />
					<img className="img" src={img2full} />
					<img className="img" src={img3half} />
					<img className="img" src={img4empty} />
					<img className="img" src={img5empty} />
				</div>
			);
	}
};
Faces.propTypes = {
	face: PropTypes.number
};

export default Faces;
