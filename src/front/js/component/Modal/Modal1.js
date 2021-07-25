import React from "react";
// import { Button } from "react-bootstrap";
// import { useState } from "react";

import "./Modal.scss";

// const Modal = () => {
// 	const [show, setShow] = useState(false);

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

// 	return (
// 		<>
// 			<Button variant="primary" onClick={handleShow}>
// 				Launch demo modal
// 			</Button>

// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Modal heading</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>Woohoo, re reading this text in a modal!</Modal.Body>
// 				<Modal.Footer>
// 					<Button variant="secondary" onClick={handleClose}>
// 						Close
// 					</Button>
// 					<Button variant="primary" onClick={handleClose}>
// 						Save Changes
// 					</Button>
// 				</Modal.Footer>
// 			</Modal>
// 		</>
// 	);
// };

const Modal = props => {
	return (
		<>
			<div className="modal-dialog border-0" role="document">
				<div className="modal-content border-0">
					<div className="cross">{props.cross}</div>
					<div className="arrow">{props.arrow}</div>
					{props.body}
				</div>
			</div>
		</>
	);
};

export default Modal;
