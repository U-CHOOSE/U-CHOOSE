import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
// import { IconContainer, MobileMenuIcon } from "react";
import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-Icon.jpg";

import Modal from "./Modal/Modal";

const Navbar = () => {
	const history = useHistory();
	// const [setshowMobileMenu, setShowMobileMenu] = useState(true);
	// const handleShowmobilMenu = () => {
	// 	setshowMobileMenu(!showMobileMenu);
	const [show, setShow] = useState(false);
	return (
		<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="" />
				</a>
			</div>
			<div>
				<button onClick={() => setShow(!show)}>open modal</button>
				{show ? <Modal body={<h1>Acceder</h1>} /> : ""}
			</div>

			<div />
		</nav>
	);
};

export default Navbar;
