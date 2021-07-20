import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/reviewteacher.scss";

const ReviewTeacher1 = () => {
	const history = useHistory();
	const [searchItem, setSearchItem] = useState("");
	const fakeData = [
		{
			name: "franc",
			age: 18
		},
		{
			name: "francisco",
			age: 18
		}
	];

	return (
		<div className="mx-auto">
			<h1 className="violet_h1 search-title">Buscar profesor</h1>
			<span className="span__">¿Qué profesor quieres evaluar?</span>
			<input
				type="text"
				placeholder="Buscar un profesor"
				className="input-searchbar"
				onChange={e => setSearchItem(e.target.value)}
			/>
			{/* <span className="span__1"> {props.span1}</span> */}
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
			<button className="button_violet_small button__search" onClick={() => history.push("/reviewteacher/id")}>
				Siguiente
			</button>
		</div>
	);
};

export default ReviewTeacher1;
