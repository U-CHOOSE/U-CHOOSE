import React, { useEffect, useState } from "react";
import reviewsImg from "../../../../docs/assets/img/mockups_reviews.jpg";
import reviewMetrics from "../../../../docs/assets/img/review_metrics.png";
import img1 from "../../../../docs/assets/img/Status=Full, Ranking=5.jpg";
import "../../styles/teacherprofile.scss";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import Faces from "../component/Faces/Faces";

const TeacherProfile = () => {
	const [count, setCount] = useState(0);
	var ola = 3;
	return (
		<div>
			{/* contain 1 */}
			<div className="contain1">
				<div className="row">
					<div className="col-5">
						<img
							className="img-profile"
							src="https://laverdadnoticias.com/__export/1577809178240/sites/laverdad/img/2019/12/31/1465326837-rt-shakira01.jpg_1017309733.jpg"
							alt="img"
						/>
					</div>
					<div className="col-7">
						<div className="d-flex">
							<img className="imagen" src={img1} />
							<img className="imagen" src={img1} />
							<img className="imagen" src={img1} />
							<img className="imagen" src={img1} />
							<img className="imagen" src={img1} />
						</div>
						<span>{count} reviews</span>
						<button className="button1">Editar perfil</button>
					</div>
				</div>
				<h1 className="name ml-3">Lucía Gómez</h1>
				<div className="d-flex ml-3 contain-logo">
					<h5 className="mr-3">logo</h5>
					<span>Financial Advisor @ AXA</span>
				</div>
			</div>
			{/* contain 2 */}
			<div className="contain2 mb-5">
				<h2 className="title2 ml-3" />
				{/* T = teacher
				O = others teachers */}
				<TeacherAssessment
					dinamismoT={0.2}
					dinamismoO={2}
					pasionT={3}
					pasionO={4}
					exampleT={5}
					exampleO={6}
					inolvementT={7}
					inolvementO={9.5}
				/>
			</div>
			<div className="mt-5 mb-5">
				<Faces face={5.2} />
			</div>
		</div>
	);
};

export default TeacherProfile;
