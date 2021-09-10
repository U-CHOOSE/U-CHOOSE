import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Search from "../component/Search/Search";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const SearchSchools = () => {
	const history = useHistory();
	const [data, setData] = useState("");
	const [mySchools, setMySchools] = useState("");
	const [selectItem, setSelectItem] = useState(false);
	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
		}
	};

	// const handelSelect = item => {
	// 	setSelect(props.type === "schools" ? item.name : item.full_name);
	// 	const newArray = selectedItem;
	// 	newArray.push(item);
	// 	setSelectedItem(newArray);
	// 	localStorage.setItem("selected_item", JSON.stringify(item));
	// 	{
	// 		console.log("item", item.id);

	// 		props.type === "teacher" ? (actions.setId(item.id, item.user_id), actions.setImg(item.img)) : "";
	// 	}
	// };

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/schools")
			.then(res => res.json())
			.then(json => {
				setData(json);
				// localStorage.setItem("school_id", json.body.id);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<Container>
			<Search
				title="Buscar un centro "
				placeholder="Escribe el nombre"
				span1="¿No encuentras tu centro?"
				type="schools"
				data={data}
				noSelect={true}
			/>
		</Container>
	);
};

export default SearchSchools;
