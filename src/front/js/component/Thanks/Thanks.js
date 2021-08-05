import React from "react";
import "../Forms/Forms.scss";
import registro_ok from "../../../../../docs/assets/img/registro_ok.png";

const Thanks = props => {
	return (
		<>
			<div>
				<img className="registroOk img-responsive" src={registro_ok} />
			</div>
			<div>
				{" "}
				<h1 className="violet_h1 mx-auto p-3"> ¡Gracias!</h1>
				<h2 className="colaborarUchoose mx-auto mx-auto p-3">{props.subtitle}</h2>
			</div>
			<div>{props.buttons}</div>
		</>
	);
};

export default Thanks;
