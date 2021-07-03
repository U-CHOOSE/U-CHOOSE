import React from "react";
// import "./Modal.scss";

const Modal = props => {
	return (
		<>
			<div className="modal-dialog" role="document">
				<div className="modal-content container-fluid">
					<div className="row justify-content-between mx-4 my-3">
						{props.arrow}
						{props.cross}
					</div>
					<div className="modal-body">{props.body}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
