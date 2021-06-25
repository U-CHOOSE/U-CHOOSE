// imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
//pages
import LandingPage from "./pages/LandingPage";
import RegisterDesicionPage from "./pages/RegisterDesicionPage";
//components
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import ScrollToTop from "./component/scrollToTop";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div className="d-flex flex-column h-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route exact path="/resgisterdesicion">
                            <RegisterDesicionPage />
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
