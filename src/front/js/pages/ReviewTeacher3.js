import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";
import img1 from "../../../../docs/assets/img/Status=Empty, Ranking=1.jpg";
import img1full from "../../../../docs/assets/img/Status=Full, Ranking=1.jpg";
import img2 from "../../../../docs/assets/img/Status=Empty, Ranking=2.jpg";
import img2full from "../../../../docs/assets/img/Status=Full, Ranking=2.jpg";
import img3 from "../../../../docs/assets/img/Status=Empty, Ranking=3.jpg";
import img3full from "../../../../docs/assets/img/Status=Full, Ranking=3.jpg";
import img4 from "../../../../docs/assets/img/Status=Empty, Ranking=4.jpg";
import img4full from "../../../../docs/assets/img/Status=Full, Ranking=4.jpg";
import img5 from "../../../../docs/assets/img/Status=Empty, Ranking=5.jpg";
import img5full from "../../../../docs/assets/img/Status=Full, Ranking=5.jpg";

//Dinamism
const ReviewTeacher3 = () => {
	const history = useHistory();

	const listUrl = [
		{ img: img1, imgfull: img1full },
		{ img: img2, imgfull: img2full },
		{ img: img3, imgfull: img3full },
		{ img: img4, imgfull: img4full },
		{ img: img5, imgfull: img5full }
	];

	// const iterator = listIcons.keys();
	const listImg = [];
	const state = 0;
	listUrl.map((url, index) => {
		if (index + 1 > state) {
			listImg.push(
				<a key={index}>
					<img className="icons-review" src={url.img} />
				</a>
			);
		} else {
			listImg.push(
				<a key={index}>
					<img className="icons-review" src={url.imgfull} />
				</a>
			);
		}
	});

	return (
		<div className="reviewTeacher3 mx-auto">
			<div className="d-flex">
				<img alt="foto" />
				<div>
					<span>nameteacher</span>
					<span>nameUniversity</span>
				</div>
			</div>

			<h1 className="">Dinamismo en sus clases</h1>
			<div className="container-icons">{listImg}</div>

			<button
				className="button_violet_small button__search"
				onClick={() => history.push("/reviewteacher/id/university/pasion")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher3;
