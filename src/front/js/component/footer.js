import React from "react";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css ";

const Footer = () => {
	const history = useHistory();
	return (
		<footer className="footer mt-auto py-3 text-center">
			<div onClick={() => history.push("/")}>
				{" "}
				<a className="btn btn-primary" href="#" role="button">
					Buscar un centro
				</a>
				<br />
				<a className="btn btn-primary" href="#" role="button">
					Buscar a un Profesor
				</a>
			</div>
		</footer>
	);
};

export default Footer;
