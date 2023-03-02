import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./core/store";
import App from "./App";

const root = document.getElementById("root")!;

ReactDOMClient.createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>
);
