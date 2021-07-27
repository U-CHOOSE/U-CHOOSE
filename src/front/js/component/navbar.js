import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import barSolid from "../../img/barSolid";
import Modal from "./Modal/Modal1";

import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

import { Link } from "react";

const NavbarComp = () => {
	const history = useHistory();

	const [show, setShow] = useState(false);

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img onClick={() => history.push("/")} src={logo} alt="" />
						{/* <span className="navbar-toggler-icon" />{" "} */}
					</Navbar.Brand>
					{/* <Navbar.Toggle aria-controls="basic-nav-dropdown" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto"> */}
					<NavDropdown className="navbar-toggler-icon">
						{/* <span className="navbar-toggler-icon" />{" "} */}
						<NavDropdown.Item href="" onClick={() => history.push("/registerformpage")}>
							<h3>Registrate</h3>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item href="#action/3.1" onClick={() => history.push("/searchschools")}>
							<div className="d-flex justify-content-around ">
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
						<Button className="btnNav" onClick={() => history.push("")}>
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
