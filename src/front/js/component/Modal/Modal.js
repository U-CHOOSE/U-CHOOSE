import React from "react";
import "./Modal.scss";

const Modal = props => {
	return (
		<>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-body">{props.body}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
