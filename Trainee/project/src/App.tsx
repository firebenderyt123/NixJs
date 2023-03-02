import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PagesLinks from "@core/enums/pagesLinks";
import { Home, Products, About, Contacts } from "@pages/index";
import { Header, Footer } from "@components/index";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Routes>
                    <Route
                        path={PagesLinks.Home}
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path={PagesLinks.Products}
                        element={
                            <>
                                <Products />
                            </>
                        }
                    />
                    <Route
                        path={PagesLinks.About}
                        element={
                            <>
                                <About />
                            </>
                        }
                    />
                    <Route
                        path={PagesLinks.Contacts}
                        element={
                            <>
                                <Contacts />
                            </>
                        }
                    />
                    {/*<Route path="*" />*/}
                </Routes>
                <Footer />
            </>
        );
    }
}
export default App;
