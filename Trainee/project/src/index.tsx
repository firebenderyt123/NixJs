import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";
import App from "./components/App";

const ConnectedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

const root = document.getElementById("root")!;

ReactDOMClient.createRoot(root).render(
    <React.StrictMode>
        <Router>
            <ConnectedApp />
        </Router>
    </React.StrictMode>
);
