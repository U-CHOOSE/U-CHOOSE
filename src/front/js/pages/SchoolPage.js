import React, { useEffect } from "react";
import TeacherAssessment from "../component/TeacherAssessment/TeacherAssessment";

import { useParams } from "react-router-dom";
const SchoolPage = () => {
	const params = useParams();
	useEffect(() => {
		console.log("params", params.id);
	}, []);
	return (
		<div>
			SchoolPage
			<TeacherAssessment name="Kilian Mbappe" />
		</div>
	);
};

export default SchoolPage;
