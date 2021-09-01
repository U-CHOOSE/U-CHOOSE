import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Context } from "../../store/appContext";

const Search = props => {
	const { store, actions } = useContext(Context);
	const [searchItem, setSearchItem] = useState("");
	const [data, setData] = useState([]);
	const [select, setSelect] = useState("");

	const handelSelect = item => {
		setSelect(props.type === "schools" ? item.name : item.full_name);
		localStorage.setItem("selected_item", JSON.stringify(item));
		{
			console.log("item", item.id);

			props.type === "teacher" ? (actions.setId(item.id, item.user_id), actions.setImg(item.img)) : "";
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
	console.log(data, props.data);
	console.log(props.mySchools, "myschools search");

	return (
		<>
			<h1 className="violet_h1 search-title mx-auto ">{props.title}</h1>
			<p className="span__"> {props.span_}</p>
			<div className="text-center">
				<input
					className="mx-auto input-search "
					type="text"
					placeholder={props.placeholder}
					onChange={e => setSearchItem(e.target.value)}
					onKeyPress={props.onKeyPress}
				/>
			</div>
			<p className="span__"> {props.span1}</p>
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
							<li key={i}>
								<div>
									<div
										onClick={() => {
											handelSelect(v);
											console.log(v, "select");
										}}
										className="image_name_container">
										{/* <div className="img_container">
											<img src={v.img} alt="img" />
										</div> */}
										<div className="name_container">{v[attribute]}</div>
									</div>
								</div>
							</li>
						);
					})
			) : (
				<div>{select}</div>
			)}{" "}
			{props.mySchools &&
				props.mySchools.map((v, i) => {
					return (
						<div key={i}>
							{/* <div className="img_container">
								<img src={v.img} alt="img" />
							</div> */}
							<div className="name_container">{v.name}</div>
						</div>
					);
				})}
			{props.button}
			<p className="span__2">{props.span2}</p>
		</>
	);
};

export default Search;
