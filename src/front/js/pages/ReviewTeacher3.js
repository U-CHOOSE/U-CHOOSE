import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";
import img1 from "../../../../docs/assets/img/Status=Empty, Ranking=1.jpg";
import img1full from "../../../../docs/assets/img/Status=Full, Ranking=1.jpg";
import img2 from "../../../../docs/assets/img/Status=Empty, Ranking=2.jpg";

//Dinamism
const ReviewTeacher3 = () => {
	const history = useHistory();

	const listUrl = [img1, img2, img1full];
	// const iterator = listIcons.keys();
	const listImg = [];
	const state = 4;
	const newArray = listUrl.map((url, index) => {
		if (index < state) {
			listImg.push(
				<a key={index}>
					<img className="icons-review" src={url} />
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
			<div className="container-icons">
				{/* <a onClick={clickIcon()}>
					<img className="icons-review" src={img1} />
				</a>
				<a>
					<img className="icons-review" src={img2} />
				</a> */}
				{listImg}
			</div>

			<button
				className="button_violet_small button__search"
				onClick={() => history.push("/reviewteacher/id/university/pasion")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher3;
