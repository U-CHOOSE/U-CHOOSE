import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
// import { IconContainer, MobileMenuIcon } from "react";
import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-Icont.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import barSolid from "../../../../docs/assets/img/bars-solid.svg";
import Modal from "./Modal/Modal";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();
	// const [setshowMobileMenu, setShowMobileMenu] = useState(true);
	// const handleShowmobilMenu = () => {
	// 	setshowMobileMenu(!showMobileMenu);
	const [show, setShow] = useState(false);

	return (
		<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
			<Link to="/src/front/js/pages/LandingPage.js" className="navbarLanding">
				<img src={logo} alt="" />
			</Link>

			<button onClick={() => setShow(!show)}>
				{" "}
				<span className="navbar-toggler-icon" />{" "}
			</button>
			{show ? <Modal body={screen} /> : ""}
		</nav>
	);
};

export default Navbar;
