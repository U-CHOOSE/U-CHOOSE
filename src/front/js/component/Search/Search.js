import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
// import PropTypes from "prop-types";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
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
		<div>
			<input
				type="text"
				placeholder="Search ..."
				className="input-searchbar"
				onChange={e => setSearchItem(e.target.value)}
			/>
			{fakeData
				.filter(v => {
					if (searchItem === "") {
						return v;
					} else if (v.name.toLowerCase().includes(searchItem.toLowerCase())) {
						return v;
					}
				})
				.map((v, i) => {
					return <div key={i}>{v.name}</div>;
				})}
		</div>
	);
};

// Search.PropTypes = {
// 	placeholder: propTypes.string
// };

export default Search;
