import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";

import imgIcon from "../../img/imgIcon.png";

import logo from "../../../../docs/assets/img/Logo-icon.png";

import Modal from "./Modal/Modal1";

import { Navbar, Nav, NavDropdown, NavLink, NavCollapse, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
	const history = useHistory();

	const [show, setShow] = useState(false);

	return (
		<>
			<Navbar bg="ligth" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img onClick={() => history.push("/")} src={imgIcon} alt="" />
						{/* <span className="navbar-toggler-icon" />{" "} */}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						{/* <Navbar.Toggle aria-controls="basic-nav-dropdown" /> */}
						{/* <Navbar.Collapse id="basic-navbar-nav"> */}
						<Nav className="me-auto">
							{/* <Nav.Link href="#features">Centros</Nav.Link>
							<Nav.Link href="#features">Profesores</Nav.Link> */}
							{/* <NavDropdown className="  navbar-toggler-icon   "> */}
							{/* <span className="navbar-toggler-icon" />{" "} */}

							<Navbar>
								{/* <NavDropdown.Item href="" onClick={() => history.push("/registerformpage")}>
									<h3>Registrate</h3>
								</NavDropdown.Item> */}

								<NavDropdown.Item href="#action/3.1" onClick={() => history.push("/searchschools")}>
									{/* <BsBuilding /> */}
									<h4>Centros</h4>
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item href="#action/3.2" onClick={() => history.push("searchteachers")}>
									{/* <div className="d-flex justify-content "> */}
									{/* <BsFillPersonFill /> */}

									<h4>Profesores</h4>
									{/* </div> */}
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item className="btnNav" onClick={() => history.push("/registerformpage")}>
									<h3>Registrate</h3>
								</NavDropdown.Item>
							</Navbar>
						</Nav>
						{/* </Nav> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* {show ? <Modal body={screen} /> : ""}{" "} */}
		</>
	);
};

export default NavbarComp;
