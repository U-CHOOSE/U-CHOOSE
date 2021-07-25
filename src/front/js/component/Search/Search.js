import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Context } from "../../store/appContext";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="violet_h1 search-title">{props.title}</h1>
			<span className="span__"> {props.span_}</span>
			<input
				type="text"
				placeholder={props.placeholder}
				className="input-searchbar"
				onChange={e => setSearchItem(e.target.value)}
				onKeyPress={props.onKeyPress}
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
