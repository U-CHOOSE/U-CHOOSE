import React from "react";
import "../Forms/Forms.scss";
import registro_ok from "../../../../../docs/assets/img/registro_ok.png";

const Thanks = props => {
	return (
		<>
			<div>
				<img className="registroOk" src={registro_ok} />
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
