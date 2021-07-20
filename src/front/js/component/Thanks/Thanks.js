import React from "react";
import "../Forms/Forms.scss";

const Thanks = props => {
	return (
		<>
			<div>
				<img src="" className="" />
			</div>
			<div>
				{" "}
				<h1 className="violet_h1"> ¡Gracias!</h1>
				<h2>{props.subtitle}</h2>
			</div>
			<div>{props.buttons}</div>
		</>
	);
};

export default Thanks;
