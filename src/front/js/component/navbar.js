import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";
import logo from "../../../front/img/Logo-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import barSolid from "../../img/barSolid";
import Modal from "./Modal/Modal1";

import { Navbar, Nav, NavDropdown, Container, Button, DropdownButton, Dropdown } from "react-bootstrap";

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
					<DropdownButton
						flip={true}
						align={{ lg: "end", sm: "start" }}
						className="navbar-toggler-icon"
						id="dropdown-menu-align-responsive-1"
						drop="start">
						<Dropdown.Item
							eventKey="1"
							href="#action/3.1"
							onClick={() => history.push("/registerformpage")}>
							<h3>Registrate</h3>
						</Dropdown.Item>
						<Dropdown.Item eventKey="2" href="#action/3.1" onClick={() => history.push("")}>
							<div className="d-flex justify-content-around ">
								<BsBuilding />
								<h4>Centros</h4>
							</div>
						</Dropdown.Item>
						<Dropdown.Item eventKey="3" href="#action/3.2" onClick={() => history.push("")}>
							<h4>
								{" "}
								<BsFillPersonFill />
								Profesores{" "}
							</h4>
						</Dropdown.Item>
					</DropdownButton>
					{/* 
					<Navbar.Toggle aria-controls="basic-nav-dropdown" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown className="navbar-toggler-icon">
							 <span className="navbar-toggler-icon" />{" "}
								<NavDropdown.Item href="#action/3.1" onClick={() => history.push("/registerformpage")}>
									<h3>Registrate</h3>
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item href="#action/3.1" onClick={() => history.push("")}>
									<div className="d-flex justify-content-around ">
										<BsBuilding />
										<h4>Centros</h4>
									</div>
								</NavDropdown.Item>
								<br />
								<NavDropdown.Item href="#action/3.2" onClick={() => history.push("")}>
									<h4>
										{" "}
										<BsFillPersonFill />
										Profesores{" "}
									</h4>
								</NavDropdown.Item>
								<br />
								<Button className="btnNav" onClick={() => history.push("")}>
									Mi perfil
								</Button>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse> */}
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
