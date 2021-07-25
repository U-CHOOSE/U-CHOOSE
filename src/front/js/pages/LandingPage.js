import React, { useEffect, useState } from "react";
import reviewsImg from "../../img/mockups_reviews.jpg";
import reviewMetrics from "../../img/review_metrics.png";
import logo from "../../img/Logo_U-CHOOSE.jpg";
import "../../styles/landingPage.scss";
import { useHistory } from "react-router";

const LandingPage = () => {
	const history = useHistory();
	return (
		<div>
			<div className="row">
				<div className="col-sm-12 mt-5 ">
					<img className="logo " src={logo} />
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12 col-lg-6 mt-4 col1-desktop ">
					<h1 className="black_h1 title">Te ayudamos a elegir dónde estudiar </h1>
					<p className="mt-3 paragraph1">
						Acertar con tus estudios es difícil.
						<br />
						U-Choose te lo hace más fácil gracias a las reviews sobre los profesores.
					</p>
					<div className="contain-buttons">
						<button
							type="button"
							className="button_violet_great btn-school mt-3"
							onClick={() => history.push("/searchschools")}>
							Buscar un centro
						</button>
						<button
							type="button"
							className="button_white_border_violet_great btn-teacher mt-3 "
							onClick={() => history.push("/searchteachers")}>
							Buscar un profesor
						</button>
					</div>
				</div>
				<div className="col-sm-12 col-lg-4">
					<img className="img2-responsive mt-2" src={reviewsImg} />
				</div>
			</div>
			{/*  */}
			<div className="row">
				<div className="col-sm-12 col-lg-4 col3desktop">
					<h2 className="black_h2 subtitle2 mt-5">¿Cómo funciona?</h2>{" "}
					<h3 className="black_h2 subtitle3 mt-4">Recogemos datos reales</h3>
					<img className="img2 mt-2" src={reviewsImg} />
					<p className="paragraph mb-5">
						Alumnos y ex alumnos envían <span className="font-weight-bold">reviews verificadas</span> de
						profesores y en base a los criterios que determinan tu experiencia: la{" "}
						<span className="font-weight-bold">pasión, ejemplos prácticos, dinamismo</span> e{" "}
						<span className="font-weight-bold ">implicación.</span>
					</p>
				</div>

				<div className="col-sm-12 col-lg-4 mt-3 col4-desktop">
					<button type="button" className="button_marino_great btn-review mt-5">
						Hacer una review
					</button>
					<h3 className="black_h2 subtitle3-desktop mt-4 mb-3 mx-auto ">
						Los presentamos de forma fácil y visual
					</h3>
					<img className="img3 img3-desktop mt-5" src={reviewMetrics} />
					<p className="paragraph2-desktop">
						Validamos y tratamos <span className="font-weight-bold">los datos,</span> para que puedas
						comparar y evaluar cada centro de un vistazo.
					</p>
				</div>

				<div className="col-sm-12 col-lg-4 mt-3">
					<p className="paragraph2">
						Validamos y tratamos <span className="font-weight-bold">los datos,</span> para que puedas
						comparar y evaluar cada centro de un vistazo.
					</p>
					<img className="img3-responsive mt-5" src={reviewMetrics} />
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
