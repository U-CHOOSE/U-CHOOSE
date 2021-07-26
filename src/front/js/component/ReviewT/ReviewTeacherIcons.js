import React, { useState, useEffect, useContext } from "react";
import "./ReviewT.scss";

import img1 from "../../../../../docs/assets/img/Status=Empty, Ranking=1.jpg";
import img1full from "../../../../../docs/assets/img/Status=Full, Ranking=1.jpg";
import img2 from "../../../../../docs/assets/img/Status=Empty, Ranking=2.jpg";
import img2full from "../../../../../docs/assets/img/Status=Full, Ranking=2.jpg";
import img3 from "../../../../../docs/assets/img/Status=Empty, Ranking=3.jpg";
import img3full from "../../../../../docs/assets/img/Status=Full, Ranking=3.jpg";
import img4 from "../../../../../docs/assets/img/Status=Empty, Ranking=4.jpg";
import img4full from "../../../../../docs/assets/img/Status=Full, Ranking=4.jpg";
import img5 from "../../../../../docs/assets/img/Status=Empty, Ranking=5.jpg";
import img5full from "../../../../../docs/assets/img/Status=Full, Ranking=5.jpg";

import { Context } from "../../store/appContext";
const ReviewTeacherIcons = props => {
	const { actions } = useContext(Context);
	const listUrl = [
		{ img: img1, imgfull: img1full },
		{ img: img2, imgfull: img2full },
		{ img: img3, imgfull: img3full },
		{ img: img4, imgfull: img4full },
		{ img: img5, imgfull: img5full }
	];
	const listImg = [];
	const [state, setState] = useState(0);
	let steep = props.step;

	listUrl.map((url, index) => {
		let icon = "";
		if (index + 1 > state) {
			icon = url.img;
		} else {
			icon = url.imgfull;
		}
		listImg.push(
			<a
				className="button_icon"
				onClick={() => {
					setState(index + 1);
					if (steep == 3) {
						//Se multiplica por 2 porque se valora sobre 10
						actions.setReview("dynamsim", state * 2);
					} else if (steep == 4) {
						actions.setReview("pasion", state * 2);
					} else if (steep == 5) {
						actions.setReview("practises_example", state * 2);
					} else if (steep == 6) {
						actions.setReview("near", state * 2);
					}
				}}
				key={index}>
				<img className="icons-review" src={icon} />
			</a>
		);
	});

	return (
		<>
			<div>
				<div className="container-icons d-flex mx-auto">{listImg}</div>
			</div>
		</>
	);
};

export default ReviewTeacherIcons;
