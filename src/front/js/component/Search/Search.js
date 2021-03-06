import React, { useState, useEffect } from "react";
import "./Search.scss";

const Search = props => {
	const [searchItem, setSearchItem] = useState("");
	const [data, setData] = useState([]);
	const [select, setSelect] = useState("");
	const [selectedItem, setSelectedItem] = useState([]);

	const handelSelect = item => {
		setSelect(props.type === "schools" ? item.name : item.full_name);
		const newArray = selectedItem;
		newArray.push(item);
		setSelectedItem(newArray);
		localStorage.setItem("selected_item", JSON.stringify(item));
		{
			console.log("item", item.id);

			props.type === "teacher" ? (actions.setId(item.id, item.user_id), actions.setImg(item.img)) : "";
		}
	};

	const removeItem = itemId => {
		const updatedItem = selectedItem.filter(selectedItem => selectedItem.id !== itemId);
		setSelectedItem(updatedItem);
		setSelect("");
		setSearchItem("");
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
			<p className="span__2"> {props.span1}</p>
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
						return (
							<li key={i}>
								<div>
									<div
										onClick={() => {
											handelSelect(v);
											console.log(v, "select");
										}}
										className="image_name_container">
										<div className="name_container">{v[attribute]}</div>
									</div>
								</div>
							</li>
						);
					})
			) : select != "" ? (
				selectedItem &&
				selectedItem.map((v, i) => {
					return (
						<li className="container" style={{ background: "red" }} key={i}>
							<div className=" row justify-content-md-center">
								<div className="col-md ">
									<img src={v.img} className="container-image-search" />
								</div>
								<div className="col-md-6">
									<p className="">{v[attribute]}</p>
									<p>subtitle</p>
								</div>
								{select != "" ? (
									<div
										className="col-md "
										onClick={() => {
											removeItem(v.id);
										}}>
										<p className="delete-search">X</p>
									</div>
								) : (
									""
								)}
							</div>
						</li>
					);
				})
			) : (
				<></>
			)}{" "}
			{props.mySchools &&
				props.mySchools.map((v, i) => {
					return (
						<li key={i}>
							<div className="img_container">
								<img src={v.img} alt="img" />
							</div>
							<div className="name_container">{v.name}</div>
						</li>
					);
				})}
			{props.button}
			<p className="span__2">{props.span2}</p>
		</>
	);
};

export default Search;
