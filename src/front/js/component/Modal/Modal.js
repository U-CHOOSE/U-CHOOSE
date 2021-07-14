import React from "react";
import "../../../styles/navbar.scss";
import modal from "./Modal";
import building from "../../../../../docs/assets/img/building.svg";
import personfill from "../../../../../docs/assets/img/person-fill.svg";

import { Link } from "react";

const Modal = () => {
	return (
		<>
			<div className="modal-body" />
			<h5>Registrate</h5> {/* <Link to="/" className="Registrer">  */}
			<span className="navbar-toggler-icon" />
			{
				// <button
				// 	className="btn btn-secondary popover-test"
				// 	title="Popover title"
				// 	data-content="Popover body content is set in this attribute."
				// />
				/* </Link>{" "}
			triggers a popover on click.  */
			}
			<div />
			{/* <button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbar-toggler-icon"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button> */}
			<div className="navbar variant:" style={{ background: "white", height: "350px" }}>
				<span aria-hidden="true" />
				{/* <div className="container-fluid" style={{ width: "20px" }}> */}

				<>
					{" "}
					<img className="building" src={building.svg} />
					<h5 className="black_h2 subtitle2 ">Centros</h5>
					<h5 className="black_h2 subtitle3">Profesores</h5>
					<img className="building" src={personfill.svg} />
					<button type="button" className="button_marino_small" data-dismiss="button" aria-label="Close">
						Mi perfil
					</button>
				</>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				/>

				{/* {/* </div> */}
			</div>
		</>
	);
};

export default Modal;
