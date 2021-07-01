import React from "react";
import reviewsImg from "../../../../docs/assets/mockups_reviews.jpg";
import reviewMetrics from "../../../../docs/assets/review_metrics.png";
import logo from "../../../../docs/assets/Logo_U-CHOOSE.jpg";
import "../../styles/landingPage.scss";

// import logo from "./Logo.svg";
// import favicon from "./favicon.png";

const LandingPage = () => {
	return (
		<div>
			{/* <navbar/> */}
			<img className="img1" src={logo} />
			{/* <img src={favicon} />  */}

			<h1 className="black_h1 title">Te ayudamos a elegir dónde estudiar </h1>
			<p>
				Acertar con tus estudios es difícil.
				<br />
				U-Choose te lo hace más fácil gracias a las reviews sobre los profesores.
			</p>

			<div className="contain-buttons d-flex flex-column">
				<button type="button" className="button_violet_great btn-school">
					Buscar un centro
				</button>
				<button type="button" className="button_white_border_violet_great btn-teacher ">
					Buscar un profesor
				</button>
			</div>

			<h2 className="black_h2 subtitle2 ">¿Cómo funciona?</h2>
			<h3 className="black_h2 subtitle3">Recogemos datos reales</h3>
			<img className="img2" src={reviewsImg} />
			<p className="paragraph">
				Alumnos y ex alumnos envían <span className="font-weight-bold">reviews verificadas</span> de profesores
				y en base a los criterios que determinan tu experiencia: el{" "}
				<span className="font-weight-bold">pasión, ejemplos prácticos, dinamismo</span> e{" "}
				<span className="font-weight-bold">implicaicón.</span>
			</p>
			<button type="button" className="button_marino_great btn-review">
				Hacer una review
			</button>

			<h3 className="black_h2 subtitle3 ">Los presentamos de forma fácil y visual</h3>
			<img className="img3" src={reviewMetrics} />
			<p className="paragraph2">
				Validamos y tratamos <span className="font-weight-bold">los datos,</span> para que puedas comparar y
				evaluar cada centro de un vistazo.
			</p>
		</div>
	);
};

export default LandingPage;
