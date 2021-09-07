import React, { useEffect } from "react";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";

import { useParams } from "react-router-dom";
const TeacherPage = () => {
	const params = useParams();
	const id = params.id;
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/teacher/" + id)
			.then(res => res.json())
			.then(json => console.log("teacher", json));
	}, []);
	return (
		<div>
			TeacherPage
			<TeacherAssessment name="Kilian Mbappe" />
		</div>
	);
};

export default TeacherPage;
