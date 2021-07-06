import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
// import { IconContainer, MobileMenuIcon } from "react";
import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-Icon.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import barSolid from "../../../../docs/assets/img/bars-solid.svg";
import Modal from "./Modal/Modal";

const Navbar = () => {
	const history = useHistory();
	// const [setshowMobileMenu, setShowMobileMenu] = useState(true);
	// const handleShowmobilMenu = () => {
	// 	setshowMobileMenu(!showMobileMenu);
	const [show, setShow] = useState(false);
	return (
		<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
			<a className="navbar-brand" href="/">
				<img src={logo} alt="" />
			</a>

			<button onClick={() => setShow(!show)}> modal</button>
			{show ? <Modal body={<barSolid />} /> : ""}
		</nav>
	);
};

export default Navbar;
