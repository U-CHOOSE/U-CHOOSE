import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Context } from "../../store/appContext";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
	const { store, actions } = useContext(Context);
	const [data, setData] = useState([]);

	useEffect(
		() => {
			setData(props.data);
		},
		[props.data]
	);

	let attribute = "full_name";

	if (props.type === "schools") {
		attribute = "name";
	} else {
		attribute = "full_name";
	}
	console.log(data);
	return (
		<>
			<h1 className="violet_h1 search-title">{props.title}</h1>
			<span className="span__"> {props.span_}</span>
			<input
				type="text"
				placeholder={props.placeholder}
				className="input-searchbar"
				onChange={e => setSearchItem(e.target.value)}
			/>
			<span> {props.span1}</span>
			{data &&
				data
					.filter(v => {
						if (searchItem === "") {
							return v;
						} else if (v[attribute].toLowerCase().includes(searchItem.toLowerCase())) {
							return v;
						}
					})
					.map((v, i) => {
						return <div key={i}>{v[attribute]}</div>;
					})}
			<button onClick={() => actions.setUpStep()} className="button_violet_small">
				Siguiente
			</button>
			<span className="span__2">{props.span2}</span>
		</>
	);
};

export default Search;
