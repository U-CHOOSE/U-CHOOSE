import React, { useState } from "react";
import "../TopRated/TopRated.scss";
import PropTypes from "prop-types";
import Faces from "../Faces/Faces";

const TopRated = props => {
	return (
		<div className="container cont_top">
			<div className="a_1 d-flex mt-3">
				<img
					className="img_topRated "
					src="https://www.cvexpres.com/wp-content/uploads/2019/09/salarios-de-los-profesores-en-uk-colegios-privados-de-uk-1.jpg"
				/>
				<div className="col-8">
					<p className="p_name">Carlos perez</p>
					<p className="p__faces mt-2">
						<Faces />
					</p>
				</div>
			</div>
			<div className="text-center">
				<button className="but_top_rated">Ver ficha</button>
			</div>
		</div>
	);
};

export default TopRated;
