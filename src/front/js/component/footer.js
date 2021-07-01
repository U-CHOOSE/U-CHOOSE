import React from "react";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css ";

const Footer = () => {
	const history = useHistory();
	return (
		<footer className="footer mt-auto py-3 text-center">
			<div onClick={() => history.push("/")}> Listado de Centros</div>
			<div onClick={() => history.push("/")}> Listado de Profesores</div>
			<div onClick={() => history.push("/")}> Politicas de Cookies</div>
			<div onClick={() => history.push("/")}> Terminos de Uso</div>
			<div onClick={() => history.push("/")}> Politicas de Privacidad</div>
			<div onClick={() => history.push("/")}> Contactos</div>
		</footer>
	);
};

export default Footer;
