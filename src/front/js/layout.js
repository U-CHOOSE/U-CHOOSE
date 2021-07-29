// imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//pages
import LandingPage from "./pages/LandingPage";
import SearchSchools from "./pages/SearchSchools";
import SearchTeachers from "./pages/SearchTeachers";
import Login from "./pages/Login";
import MyCenters from "./pages/MyCenters";
import RegisterFormPage from "./pages/RegisterFormPage";

import ReviewTeacher from "./pages/ReviewTeacher";

import Sass from "./pages/Sass";

import TeacherProfile from "./pages/TeacherProfile";

import EditTeacher from "./pages/EditTeacher";

import StudentProfile from "./pages/StudentProfile";

//components
import NavbarComp from "./component/navbar";
import Footer from "./component/footer";
import ScrollToTop from "./component/scrollToTop";

//Scss
import "../styles/index.scss";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	// is_logged = localStorage.getItem("token")

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarComp />
					<Switch>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/searchteachers">
							<SearchTeachers />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/registerformpage">
							<RegisterFormPage />
						</Route>
						<Route exact path="/reviewteacher">
							<ReviewTeacher />
						</Route>

						<Route exact path="/sass">
							<Sass />
						</Route>
						<Route exact path="/teacherprofile">
							<TeacherProfile />
						</Route>
						<Route exact path="/teacherprofile/edit">
							<EditTeacher />
						</Route>

						<Route exact path="/searchschools">
							<SearchSchools />
						</Route>
						<Route exact path="/studentprofile">
							<StudentProfile />
						</Route>
						<Route exact path="/studentprofile/mycenters">
							<MyCenters />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
