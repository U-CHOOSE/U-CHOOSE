import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Context } from "../../store/appContext";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="violet_h1">{props.title}</h1>
			<input
				type="text"
				placeholder={props.placeholder}
				className="input-searchbar"
				onChange={e => setSearchItem(e.target.value)}
			/>
			<span> {props.span1}</span>

			<button onClick={() => actions.setUpStep()} className="button_violet_small">
				Siguiente
			</button>
			<span className="span_1">{props.span2}</span>
		</>
	);
};

export default Search;
