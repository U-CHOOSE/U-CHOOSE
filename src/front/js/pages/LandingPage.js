import React from "react";
import reviewsImg from "../../../../docs/assets/mockups_reviews.jpg";
import reviewMetrics from "../../../../docs/assets/review_metrics.png";
import "../../styles/landingPage.scss";
// import logo from "./Logo.svg";
// import favicon from "./favicon.png";

const LandingPage = () => {
	return (
		<div>
			{/* <navbar/> */}
			{/* <img src={logo} />
			<img src={favicon} /> */}

			<h2 className="subtitle">Te ayudamos a elegir dónde estudiar </h2>
			<p>
				Acertar con tus estudios es difícil. U-Choose te lo hace más fácil gracias a las reviews sobre los
				profesores .
			</p>

			<div className="contain-buttons d-flex flex-column mt-5">
				<button type="button" className="btn btn-school">
					Buscar un centro
				</button>
				<button type="button" className="btn btn-outline btn-teacher mt-2">
					Buscar un profesor
				</button>
			</div>

			<h2 className="subtitle mt-5">¿Cómo funciona?</h2>
			<h3 className="subtitle2">Recogemos datos reales</h3>
			<img src={reviewsImg} />
			<p>
				Alumnos y ex alumnos envían <span className="font-weight-bold">reviews verificadas</span> de profesores
				y en base a los criterios que determinan tu experiencia: el{" "}
				<span className="font-weight-bold">pasión, ejemplos prácticos, dinamismo</span> e{" "}
				<span className="font-weight-bold">implicaicón.</span>
			</p>
			<button type="button" className="btn btn-review mt-5">
				Hacer una review
			</button>

			<h3 className="subtitle2 mt-4">Los presentamos de forma fácil y visual</h3>
			<img className="img-review px-4 mt-3" src={reviewMetrics} />
			<p className="mt-1">
				Validamos y tratamos <span className="font-weight-bold">los datos,</span> para que puedas comparar y
				evaluar cada centro de un vistazo.
			</p>
		</div>
	);
};

export default LandingPage;
