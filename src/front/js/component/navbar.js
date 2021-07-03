import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
// import { IconContainer, MobileMenuIcon } from "react";
import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-Icon.jpg";
import { Button } from "bootstrap.bundle.min.js";
import { Modal } from "bootstrap.bundle.min.js";

const Navbar = () => {
	const history = useHistory();
	const [setshowMobileMenu, setShowMobileMenu] = useState(true);
	const handleShowmobilMenu = () => {
		setshowMobileMenu(!showMobileMenu);
		const [show, setShow] = useState(false);
	};
	return (
		<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="" />
				</a>
			</div>
			return (
			<Button variant="primary" onClick={() => setShow(true)}>
				aceder
			</Button>
			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title">
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">ACCEDER</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim,
						consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci
						possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab
						quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque
						facilis ipsum deleniti rem!
					</p>
				</Modal.Body>
			</Modal>
			<div />
		</nav>
	);
};

export default Navbar;
