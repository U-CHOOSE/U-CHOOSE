import React from "react";
import "../../../styles/navbar.scss";
import modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
	return (
		<>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbar-toggler-icon"
				// aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarToggleExternalContent">
				<div className="bg-dark p-4">
					<h5 className="text-black h4">Collapsed content</h5>
					<span className="text">Toggleable via the navbar brand.</span>
				</div>
			</div>
			<div className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarToggleExternalContent"
						// aria-controls="navbarToggleExternalContent"
						aria-expanded="false">
						{/* aria-label="Toggle navigation" */}
					</button>
				</div>
			</div>
		</>
	);
};

export default Modal;
