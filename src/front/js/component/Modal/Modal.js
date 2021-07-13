import React from "react";

import "./Modal.scss";

const Modal = props => {
	return (
		<>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="cross">{props.cross}</div>
					<div className="arrow">{props.arrow}</div>
					{props.body}
				</div>
			</div>
		</>
	);
};

export default Modal;
