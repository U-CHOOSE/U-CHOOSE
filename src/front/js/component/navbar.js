import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";
import logo from "../../../../docs/assets/img/Logo-icon.png";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, NavDropdown, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
	const { actions } = useContext(Context);
	const history = useHistory();

	const [show, setShow] = useState(false);

	const logout = () => {
		actions.removeToken();
		window.location.replace("/login");
	};

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand>
						<img onClick={() => history.push("/")} src={logo} alt="" />
					</Navbar.Brand>
					<NavDropdown className="navbar-toggler-icon">
						{actions.isLogged() ? (
							<NavDropdown.Item onClick={logout} style={{ color: "red" }}>
								<h3>Logout</h3>
							</NavDropdown.Item>
						) : (
							<NavDropdown.Item onClick={() => history.push("/registerformpage")}>
								<h3>Registrate</h3>
							</NavDropdown.Item>
						)}

						<br />
						<NavDropdown.Item onClick={() => history.push("")}>
							<div className="d-flex justify-content-around ">
								<BsBuilding />
								<h4>Centros</h4>
							</div>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item onClick={() => history.push("")}>
							<div className="d-flex justify-content-around ">
								<BsFillPersonFill />
								<h4>Profesores</h4>
							</div>
						</NavDropdown.Item>
						<br />
						{actions.isLogged() ? (
							<Button className="btnNav" onClick={() => history.push("")}>
								Mi perfil
							</Button>
						) : (
							<Button className="btnNav" onClick={() => history.push("/login")}>
								Login
							</Button>
						)}
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
