import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Context } from "../../store/appContext";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
	const { store, actions } = useContext(Context);
	const fakeData = [
		{
			name: "franc",
			age: 18
		},
		{
			name: "francisco",
			age: 18
		},
		{
			name: "Jordi",
			age: 20
		},
		{
			name: "Albert",
			age: 25
		},
		{
			name: "Marc",
			age: 18
		}
	];
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

			<span className="span__1"> {props.span1}</span>
			{fakeData
				.filter(v => {
					if (searchItem === "") {
						return v;
					} else if (v.name.toLowerCase().includes(searchItem.toLowerCase())) {
						return v;
					}
				})
				.map((v, i) => {
					return (
						<div className="data" key={i}>
							{v.name}
						</div>
					);
				})}

			<button onClick={() => actions.setUpStep()} className="button_violet_small button__search">
				{props.button}
			</button>
			<span className="span__2">{props.span2}</span>
		</>
	);
};

export default Search;
