import React, { Component } from "react";
import { Header, Footer } from "@components/index";
import { Routes } from "@routes/index";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Routes />
                <Footer />
            </>
        );
    }
}
export default App;
