import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import "../../styles/navbar.scss";
import imgIcon from "../../img/imgIcon.png";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar, NavItem, NavLink, NavDropdown, Navmenu, Nav, Container, Button } from "react-bootstrap";

const NavbarComp = () => {
	const { actions, store } = useContext(Context);
	const history = useHistory();
	const [data, setData] = useState({});
	const [show, setShow] = useState(false);

	const logout = () => {
		actions.removeToken();
		window.location.replace("/login");
	};
	useEffect(() => {
		const token = actions.getToken();
		fetch(process.env.BACKEND_URL + "/user", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(res => res.json())
			.then(json => {
				setData(json);
				console.log("user", json);
				actions.setCurrentUser(json);
			});
	}, []);

	console.log("1", data);
	const kindOfProfile = () => {
		const user = JSON.parse(localStorage.getItem("user"));
		console.log("este", user);
		if (user.is_student) {
			history.push("/studentprofile");
		} else {
			history.push("/teacherprofile");
		}
	};

	console.log("is_student", store.is_student.is_student);

	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand>
						<img className="logoNav" onClick={() => history.push("/")} src={imgIcon} alt="" />
						<Nav className="justify-content-around">
							<Nav.Item className="ItemsNav align-self-center">
								<Nav.Link href="/centros"> Centros </Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-1">Profesores</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Brand>
					<NavDropdown className="navbar-toggler-icon" drop="left">
						{actions.isLogged() ? (
							<NavDropdown.Item
								onClick={logout}
								style={{ color: "red" }}
								className="d-flex justify-content-around">
								<h4>Logout</h4>
							</NavDropdown.Item>
						) : (
							<NavDropdown.Item
								onClick={() => history.push("/registerformpage")}
								className="d-flex justify-content-around">
								<h4>Registrate</h4>
							</NavDropdown.Item>
						)}

						<br />
						<NavDropdown.Item onClick={() => history.push("/searchschools")}>
							<nav className="flex item" />
							<div className="d-flex justify-content-around ">
								<BsBuilding />
								<h4>Centros</h4>
							</div>
						</NavDropdown.Item>
						<br />
						<NavDropdown.Item onClick={() => history.push("/searchteachers")}>
							<div className="d-flex justify-content-around ">
								<BsFillPersonFill />
								<h4>Profesores</h4>
							</div>
						</NavDropdown.Item>
						<br />

						{actions.isLogged() ? (
							<Button className="btnNav w-auto" onClick={kindOfProfile}>
								Mi perfil
							</Button>
						) : (
							<Button className="btnNav w-auto" onClick={() => history.push("/login")}>
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
