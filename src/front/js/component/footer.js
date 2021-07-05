import React from "react";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css ";

const Footer = () => {
	const history = useHistory();
	return (
		<footer className="footer mt-auto py-3 text-center">
			<div onClick={() => history.push("/")}>
				{" "}
				<a href="#">Listado de Centros</a>
			</div>
			<div onClick={() => history.push("/")}>
				<a href="#">Listado de Profesores</a>
			</div>
			<div onClick={() => history.push("/")}>
				{" "}
				<a href="#">Politicas de Cookies</a>
			</div>
			<div onClick={() => history.push("/")}>
				<a href="#">Politicas de Privacidad</a>
			</div>
			<div onClick={() => history.push("/")}>
				{" "}
				<a href="#">Contactos</a>
			</div>
		</footer>
	);
};

export default Footer;
