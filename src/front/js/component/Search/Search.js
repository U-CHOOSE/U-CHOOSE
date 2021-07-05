// import React, { useState, useEffect, useContext } from "react";
// import "./Search.scss";
// import { Context } from "../store/appContext";

// const Search = props => {
// 	const [searchItem, setSearchItem] = useState("");
// 	const { store, actions } = useContext(Context);
// 	const fakeData = [
// 		{
// 			name: "franc",
// 			age: 18
// 		},
// 		{
// 			name: "francisco",
// 			age: 18
// 		},
// 		{
// 			name: "Jordi",
// 			age: 20
// 		},
// 		{
// 			name: "Albert",
// 			age: 25
// 		},
// 		{
// 			name: "Marc",
// 			age: 18
// 		}
// 	];
// 	return (
// 		<div>
// 			<h1>{props.title}</h1>
// 			<input
// 				type="text"
// 				placeholder={props.placeholder}
// 				className="input-searchbar"
// 				onChange={e => setSearchItem(e.target.value)}
// 			/>
// 			<span> {props.span}</span>
// 			{props.data
// 				.filter(v => {
// 					if (searchItem === "") {
// 						return v;
// 					} else if (v.name.toLowerCase().includes(searchItem.toLowerCase())) {
// 						return v;
// 					}
// 				})
// 				.map((v, i) => {
// 					return <div key={i}>{v.name}</div>;
// 				})}
// 			<button onClick={() => actions.setUpStep()} className="button_violet_large">
// 				Siguiente
// 			</button>
// 		</div>
// 	);
// };

// export default Search;
