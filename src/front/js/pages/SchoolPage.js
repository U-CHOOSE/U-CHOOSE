import React, { useEffect, useState, useContext } from "react";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";
import { useParams } from "react-router-dom";

const SchoolPage = () => {
	const params = useParams();
	const id = params.id;
	console.log("params", params.id);

	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/school/" + id)
			.then(res => res.json())
			.then(json => console.log("school", json));
	}, []);

	return (
		<div>
			SchoolPage
			<TeacherAssessment name="Kilian Mbappe" />
		</div>
	);
};

export default SchoolPage;
