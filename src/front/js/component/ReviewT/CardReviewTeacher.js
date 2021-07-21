import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const CardReviewTeacher = props => {
	return (
		<div className="card_reviewTeacher mx-auto">
			<div className="d-flex">
				<img src={props.srcImg} />
				<div>
					<span>{props.name}</span>
					<span>{props.nameUniversity}</span>
				</div>
			</div>

			<h1 className="">{props.title}</h1>
			<div>{props.body}</div>

			<button
				className="button_violet_small button__search"
				onClick={() => {
					props.onClick;
				}}>
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
	onClick: PropTypes.string,
	button: PropTypes.string
};

export default CardReviewTeacher;
