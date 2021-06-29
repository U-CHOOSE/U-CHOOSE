import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div onClick={() => history.push("/")}> LOGO</div>
			<div onClick={() => history.push("/")}> </div>
		</nav>
	);
};

export default Navbar;
