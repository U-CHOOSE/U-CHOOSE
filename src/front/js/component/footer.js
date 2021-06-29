import React from "react";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css ";

const Footer = () => {
	const history = useHistory();
	return (
		<footer className="footer mt-auto py-3 text-center">
			<div onClick={() => history.push("/")}>
				{" "}
				<button className="btn btn-primary" href="#" role="button">
					Buscar Centro
				</button>
				<br />
				<button className="btn btn-primary" href="#" role="button">
					Buscar Profesor
				</button>
			</div>
		</footer>
	);
};

export default Footer;
