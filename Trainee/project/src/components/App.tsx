import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagesLinks from "../enums/pagesLinks";
import AppHome from "./pages/Home/AppHome";
import AppProducts from "./pages/Products/AppProducts";
import AppAbout from "./pages/About/AppAbout";
import AppContacts from "./pages/Contacts/AppContacts";

import AppHeader from "./appHeader/AppHeader";
import AppFooter from "./appFooter/AppFooter";

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route
                            path={PagesLinks.Home}
                            element={
                                <>
                                    <AppHeader />
                                    <AppHome />
                                    <AppFooter />
                                </>
                            }
                        />
                        <Route
                            path={PagesLinks.Products}
                            element={
                                <>
                                    <AppHeader />
                                    <AppProducts />
                                    <AppFooter />
                                </>
                            }
                        />
                        <Route
                            path={PagesLinks.About}
                            element={
                                <>
                                    <AppHeader />
                                    <AppAbout />
                                    <AppFooter />
                                </>
                            }
                        />
                        <Route
                            path={PagesLinks.Contacts}
                            element={
                                <>
                                    <AppHeader />
                                    <AppContacts />
                                    <AppFooter />
                                </>
                            }
                        />
                        {/*<Route path="*" />*/}
                    </Routes>
                </Router>
            </>
        );
    }
}
export default App;
