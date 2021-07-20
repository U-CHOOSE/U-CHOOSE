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

import RegisterFormPage from "./pages/RegisterFormPage";

import ReviewTeacher1 from "./pages/ReviewTeacher1";

import ReviewTeacher2 from "./pages/ReviewTeacher2";

import ReviewTeacher3 from "./pages/ReviewTeacher3";

import ReviewTeacher4 from "./pages/ReviewTeacher4";

import ReviewTeacher5 from "./pages/ReviewTeacher5";

import ReviewTeacher6 from "./pages/ReviewTeacher6";

import ReviewTeacher7 from "./pages/ReviewTeacher7";

import ReviewTeacher8 from "./pages/ReviewTeacher8";

import ReviewTeacher9 from "./pages/ReviewTeacher9";

import Sass from "./pages/Sass";

import StudentProfile from "./pages/StudentProfile";

import MyCenters from "./pages/MyCenters";

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
							<ReviewTeacher1 />
						</Route>
						<Route exact path="/reviewteacher/id">
							<ReviewTeacher2 />
						</Route>
						<Route exact path="/reviewteacher/:id/:university">
							<ReviewTeacher3 />
						</Route>
						<Route exact path="/reviewteacher/:id/:university/pasion">
							<ReviewTeacher4 />
						</Route>
						<Route exact path="/reviewteacher/:id/:university/pasion/examples">
							<ReviewTeacher5 />
						</Route>
						<Route exact path="/reviewteacher/:id/:university/pasion/examples/implication">
							<ReviewTeacher6 />
						</Route>
						<Route exact path="/reviewteacher/:id/:university/pasion/examples/implication/year">
							<ReviewTeacher7 />
						</Route>
						<Route
							exact
							path="/reviewteacher/:id/:university/pasion/examples/implication/year/anythingelse">
							<ReviewTeacher8 />
						</Route>
						<Route
							exact
							path="/reviewteacher/:id/:university/pasion/examples/implication/year/anythingelse/send">
							<ReviewTeacher9 />
						</Route>
						<Route exact path="/sass">
							<Sass />
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
