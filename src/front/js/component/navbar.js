import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import barSolid from "../../../../docs/assets/img/bars-solid.svg";
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
					<Navbar.Collapse id="basic-navbar-nav"> */}
					{/* <Nav className="me-auto"> */}
					<NavDropdown className="navbar-toggler-icon">
						{/* <span className="navbar-toggler-icon" />{" "} */}
						<NavDropdown.Item href="" onClick={() => history.push("/registerformpage")}>
							<h3>Registrate</h3>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item href="" onClick={() => history.push("")}>
							<h4>Centros</h4>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item href="" onClick={() => history.push("")}>
							<h4>Profesores</h4>
						</NavDropdown.Item>
						<br />
						<Button className="btnNav" onClick={() => history.push("")}>
							Mi perfil
						</Button>
					</NavDropdown>
					{/* </Nav> */}
					{/* </Navbar.Collapse> */}
				</Container>
			</Navbar>
			{show ? <Modal body={screen} /> : ""}{" "}
			{/* <nav className="navbar navbar-light header d-flex justify-content-between bg-dark">
				<img onClick={() => history.push("/")} src={logo} alt="" />
				<button onClick={() => setShow(!show)}>
					{" "}
					<span className="navbar-toggler-icon" />{" "}
				</button>
				{show ? <Modal body={screen} /> : ""}{" "}
			</nav> */}
		</>
	);
};

export default NavbarComp;
