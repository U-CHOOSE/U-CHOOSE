import React from "react";
import "../../styles/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Sass = () => {
	return (
		<div>
			<h1 className="black_h1">Te ayudamos a elegir dónde estudiar</h1>
			<h1 className="violet_h1">Te ayudamos a elegir dónde estudiar</h1>
			<input type="text" placeholder="Search ..." />
			<input type="text" placeholder="Password" />
			<br />
			<br />
			<button className="button_violet_great">Crear cuenta</button>
			<br />
			<br />
			<button className="button_violet_small">Mi Perfil</button>
			<br />
			<br />
			<button className="button_marino_great">Mi Perfil</button>
			<br />
			<br />
			<button className="button_marino_small">Mi Perfil</button>
			<br />
			<br />
			<button className="button_white_border_marino">Mi Perfil</button>
			<br />
			<br />
			<button className="button_white_border_violet_great">Mi Perfil</button>
			<br />
			<br />
			<button className="button_white_border_violet_small">Mi Perfil</button>
			<br />
			<br />
			<div></div>
		</div>
	);
};

export default Sass;
