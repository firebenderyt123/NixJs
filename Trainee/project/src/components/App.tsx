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
                <AppHeader />
                <Routes>
                    <Route
                        path={PagesLinks.Home}
                        element={
                            <>
                                <AppHome />
                            </>
                        }
                    />
                    <Route
                        path={PagesLinks.Products}
                        element={
                            <>
                                <AppProducts />
                            </>
                        }
                    />
                    <Route
                        path={PagesLinks.About}
                        element={
                            <>
                                <AppAbout />
                            </>
                        }
                    />
                    <Route
                        path={PagesLinks.Contacts}
                        element={
                            <>
                                <AppContacts />
                            </>
                        }
                    />
                    {/*<Route path="*" />*/}
                </Routes>
                <AppFooter />
            </>
        );
    }
}
export default App;
