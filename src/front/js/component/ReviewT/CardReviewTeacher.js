import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./ReviewT.scss";

const CardReviewTeacher = props => {
	return (
		<div className="card_reviewTeacher mx-auto">
			<div className="d-flex ">
				<img className="img-teacher" src={props.srcImg} />
				<div className="cont_name_university">
					<span>{props.name}</span>
					<span>{props.nameUniversity}</span>
				</div>
			</div>

			<h1 className="">{props.title}</h1>
			<div className="body_card">{props.body}</div>

			<button className="button_card" onClick={props.onClick}>
				{props.button}
			</button>
		</div>
	);
};

CardReviewTeacher.propTypes = {
	title: PropTypes.string,
	srcImg: PropTypes.string,
	name: PropTypes.string,
	nameUniversity: PropTypes.string,
	body: PropTypes.string,
	onClick: PropTypes,
	button: PropTypes.string
};

export default CardReviewTeacher;
