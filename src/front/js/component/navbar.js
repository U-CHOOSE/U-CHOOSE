import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsBuilding } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "../../styles/navbar.scss";
import imgIcon from "../../img/imgIcon.png";
import uchooseNav from "../../img/uchooseNav.png";
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
				// console.log("user", json);
				actions.setCurrentUser(json);
			});
	}, []);

	// console.log("1", data);
	const kindOfProfile = () => {
		const user = JSON.parse(localStorage.getItem("user"));
		// console.log("este", user);
		if (user.is_student) {
			history.push("/studentprofile");
		} else {
			history.push("/teacherprofile");
		}
	};

	// console.log("is_student", store.is_student.is_student);

	return (
		<>
			<nav>
				<div className="logonav">
					<img className="uchooseNav" onClick={() => history.push("/")} src={uchooseNav} />{" "}
				</div>
				{/* <img className="imgNav" onClick={() => history.push("/")} src={imgIcon} /> */}
				<ul className="nav-links">
					<li>
						<a>Centros</a>
					</li>
					<li>
						<a>Profesores</a>
					</li>
					<div>
						<li>
							<a className="acceder"> Acceder</a>
						</li>
					</div>
					<span>
						<Button className="btnNavre Bold-text btn-lg  btn-outline-dark">Registrate </Button>
					</span>
				</ul>
				<FaBars className="burger" />
			</nav>
		</>
	);
};

export default NavbarComp;
