import React, { useState } from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = props => {
	return (
		<>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-body">
						{props.arrow}
						{props.title}
						{props.subtitle}
						{props.body}
						{props.footer}
					</div>
				</div>
			</div>
		</>
	);
};

Modal.PropTypes = {
	arrow: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.subtitle,
	body: PropTypes.string,
	footer: PropTypes.string
};
export default Modal;

// const Modal = props => {
// 	const showHideClassName = props.visible ? "modal display-block" : "modal display-none";

// 	return (
// 		<div className={showHideClassName}>
// 			<section className="modal__main">
// 				<button onClick={props.handleClose}>x</button>
// 				{props.children}
// 			</section>
// 		</div>
// 	);
// };

// Modal.propTypes = {
// 	handleClose: PropTypes.bool,
// 	visible: PropTypes.bool,
// 	children: PropTypes.string
// };
