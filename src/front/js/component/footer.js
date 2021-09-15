import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logoFooter from "../../img/logoFooter.png";
// import "bootstrap/dist/css/bootstrap.min.css ";

const Footer = () => {
	const history = useHistory();
	return (
		<footer className="footer mt-auto py-3 text-center">
			<img className="logoFooter" onClick={() => history.push("/")} src={logoFooter} alt="" />
			<div onClick={() => history.push("/")}>
				{" "}
				<Link to="./">Listado de Centros</Link>
			</div>
			<div onClick={() => history.push("/")}>
				<Link to="./">Listado de Profesores</Link>
			</div>
			<div onClick={() => history.push("/")}>
				{" "}
				<Link to="./">Politicas de Cookies</Link>
			</div>
			<div onClick={() => history.push("/")}>
				<Link to="./">Politicas de Privacidad</Link>
			</div>
			<div onClick={() => history.push("/")}>
				{" "}
				<Link to="./">Contactos</Link>
			</div>
		</footer>
	);
};

export default Footer;
