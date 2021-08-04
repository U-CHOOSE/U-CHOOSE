import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";
import imgIcon from "../../img/imgIcon.png";
import LogoBlack from "../../../../docs/assets/img/Logo-black.jpg";

import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, NavDropdown, Navmenu, Container, Button } from "react-bootstrap";

// import { Navbar, Nav, NavDropdown, NavLink, NavCollapse, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
	const history = useHistory();

	const [show, setShow] = useState(false);
	// const [dropdown, setDropdown] = useState(false);

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img onClick={() => history.push("/")} src={imgIcon} alt="" />
						{/* <img onClick={() => history.push("/")} src={LogoBlack} alt="" /> */}
					</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="basic-nav-dropdown" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto"> */}
					<h5 className="registrate">Registrate</h5>
					<NavDropdown className=" navbar-toggler-icon" drop="left">
						{/* <span className="navbar-toggler-icon" /> */}

						<NavDropdown.Item
							className="d-flex justify-content-around"
							href=""
							onClick={() => history.push("/registerformpage")}>
							<h3>Registrate</h3>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item href="#action/3.1" onClick={() => history.push("/searchschools")}>
							<div className="d-flex justify-content-around">
								<BsBuilding />
								<h4>Centros</h4>
							</div>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item href="#action/3.2" onClick={() => history.push("searchteachers")}>
							<div className="d-flex justify-content-around ">
								<BsFillPersonFill />
								<h4>Profesores</h4>
							</div>
						</NavDropdown.Item>
						<br />
						<Button className="btnNav w-auto" onClick={() => history.push("")}>
							Mi perfil
						</Button>
					</NavDropdown>
					{/* </Nav>
					</Navbar.Collapse>{" "} */}
				</Container>
			</Navbar>
			{/* {show ? <Modal body={screen} /> : ""}{" "}  */}
		</>
	);
};

export default NavbarComp;
