import React, { useState } from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

const Modal = props => {
	return (
		<>
			{/* <div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"> */}
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							<h1>{props.title}</h1>
							<h4>{props.subtitle}</h4>
						</h5>
						<button type="button" className="close" aria-label="Close" onClick={props.handleClose}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">{props.body}</div>
					<div className="modal-footer">{props.footer}</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

Modal.PropTypes = {
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
