import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";
import imgIcon from "../../img/imgIcon.png";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, NavDropdown,Navmenu, Container, Button } from "react-bootstrap";

// import { Navbar, Nav, NavDropdown, NavLink, NavCollapse, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
	const history = useHistory();

	const [show, setShow] = useState(false);

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<img onClick={() => history.push("/")} src={imgIcon} alt="" />
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


