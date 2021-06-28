import React from "react";
import reviewsImg from "../../../../docs/assets/mockups_reviews.jpg";
import reviewMetrics from "../../../../docs/assets/review_metrics.png";
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

			<br />
			<div className="contain-buttons d-flex flex-column">
				<button type="button" className="btn btn-school">
					Buscar un centro
				</button>
				<button type="button" className="btn btn-outline btn-teacher">
					Buscar un profesor
				</button>
			</div>

			<h2 className="subtitle">¿Cómo funciona?</h2>
			<h3>Recogemos datos reales</h3>
			<img src={reviewsImg} />
			<p>
				Alumnos y ex alumnos envían reviews verificadas de profesores y en base a los criterios que determinan
				tu experiencia: el pasión, ejemplos prácticos, dinamismo e implicaicón.
			</p>
			<button type="button" className="btn btn-review">
				Hacer una review
			</button>

			<h3>Los presentamos de forma fácil y visual</h3>
			<img src={reviewMetrics} />
			<p>Validamos y tratamos los datos, para que puedas comparar y evaluar cada centro de un vistazo.</p>
		</div>
	);
};

export default LandingPage;
