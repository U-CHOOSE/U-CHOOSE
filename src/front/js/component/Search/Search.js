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
	console.log(data);

	return (
		<>
			{/* // 			<h1 className="violet_h1">{props.title}</h1>
// 			<input
// 				type="text"
// 				placeholder={props.placeholder}
// 				className="input-searchbar"
// 				onChange={e => setSearchItem(e.target.value)}
// 			/>
// 			<span> {props.span1}</span>

// 			<button onClick={() => actions.setUpStep()} className="btnSearch">
// 				Siguiente
// 			</button>
// 			<span className="span_1">{props.span2}</span> */}

			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className=" search-title mb-5">{props.title}</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<span className=" span__0 mx-auto"> {props.span_}</span>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<input
							type="text"
							placeholder={props.placeholder}
							className="input-searchbar mt-5"
							onChange={e => setSearchItem(e.target.value)}
							onKeyPress={props.onKeyPress}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<span> {props.span1}</span>
					</div>
				</div>

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
							console.log("select", select);
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
				{console.log("select", select)}
				<div className=" cont_bton_search">{props.button}</div>

				<span className="span__2">{props.span2}</span>
			</div>
		</>
	);
};

export default Search;
