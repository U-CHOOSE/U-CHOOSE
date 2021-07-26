import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Context } from "../../store/appContext";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
	const { store, actions } = useContext(Context);

	const [data, setData] = useState([]);
	const [select, setSelect] = useState("");

	const handelSelect = item => {
		setSelect(props.type === "schools" ? item.name : item.full_name);
		localStorage.setItem("selected_item", JSON.stringify(item));
		{
			console.log("item", item);
			props.type === "teacher" ? actions.setId(item.id) : "";
		}
	};
	//
	useEffect(
		() => {
			setData(props.data);
		},
		[props.data]
	);

	let attribute = "full_name";

	if (props.type === "schools") {
		attribute = "name";
	}
	console.log(data);

	return (
		<>
			<div className="container___search">
				<h1 className="violet_h1 search-title mb-5">{props.title}</h1>
				<span className="span__"> {props.span_}</span>
				<input
					type="text"
					placeholder={props.placeholder}
					className="input-searchbar"
					onChange={e => setSearchItem(e.target.value)}
					onKeyPress={props.onKeyPress}
				/>
				<span> {props.span1}</span>

				{data && select === "" && searchItem !== "" ? (
					data
						.filter(v => {
							if (searchItem === "") {
								return v;
							} else if (v[attribute].toLowerCase().includes(searchItem.toLowerCase())) {
								return v;
							}
						})
						.map((v, i) => {
							console.log(select);
							console.log(data.img);
							return (
								<div key={i}>
									<div
										onClick={() => handelSelect(v)}
										className="image_name_container d-flex align-item-center">
										{props.imageTrueOrFalse == true ? (
											<div className="img_container">
												<img src={v.img} alt="img" />
											</div>
										) : (
											""
										)}

										<div className="name_container">{v[attribute]}</div>
									</div>
									{/* <div>X</div> */}
								</div>
							);
						})
				) : (
					<div>{select}</div>
				)}
				{console.log(select)}

				{props.button}
				<span className="span__2">{props.span2}</span>
			</div>
		</>
	);
};

export default Search;
