import React, { useState, useEffect, useContext } from "react";
import "./Search.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
const Search = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [searchItem, setSearchItem] = useState("");
	const [data, setData] = useState([]);
	const [select, setSelect] = useState("");
	const [selectedItem, setSelectedItem] = useState([]);

	const handelSelect = item => {
		setSelect(props.type === "schools" ? item.name : item.full_name);
		const newArray = selectedItem;
		newArray.push(item);
		setSelectedItem(newArray);
		setSearchItem("");
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
	let subtitle = "type_of_teacher";
	if (props.type === "schools") {
		attribute = "name";
		subtitle = "location";
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
				/>
			</div>
			<p className="span__2"> {props.span1}</p>
			{data && searchItem !== "" ? (
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
									{props.noSelect ? (
										<Link to={v.name ? "/schoolpage/" + v.id : "/teacherpage/" + v.id}>
											<div
												onClick={() => {
													handelSelect(v);
													console.log(v, "select");
												}}
												className="image_name_container">
												<div className="name_container">{v[attribute]}</div>
											</div>
										</Link>
									) : (
										<div
											onClick={() => {
												handelSelect(v);
												console.log(v, "select");
											}}
											className="image_name_container">
											<div className="name_container">{v[attribute]}</div>
										</div>
									)}
								</div>
							</li>
						);
					})
			) : select != "" ? (
				selectedItem &&
				selectedItem.map((v, i) => {
					console.log(v[subtitle], v, "v sub");
					return (
						<li className="container" style={{ background: "red" }} key={i}>
							<div className=" row justify-content-md-center">
								<div className="col-md ">
									<img src={v.img} className="container-image-search" />
								</div>
								<div className="col-md-6">
									<p className="">{v[attribute]}</p>
									<p>{v[subtitle]}</p>
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
