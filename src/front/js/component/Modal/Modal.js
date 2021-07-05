import React from "react";
import "../../../styles/navbar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Modal = props => {
	return (
		<>
			<div className="modal fullscreen-modal fade" role="document">
				<div className="modal-content container-fluid">
					<div className="row justify-content-between mx-4 my-3">
						{props.arrow}
						{props.cross}
					</div>
					<div className="modal-body">{props.body}</div>
					<button className="buttonIcon"> {faBars} </button>
				</div>
			</div>
		</>
	);
};

export default Modal;
