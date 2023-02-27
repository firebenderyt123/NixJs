import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer, { initialState } from "./store/reducer";
import App from "./components/App";

import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

const ConnectedApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

const root = document.getElementById("root")!;

ReactDOMClient.createRoot(root).render(
    <React.StrictMode>
        <ConnectedApp />
    </React.StrictMode>
);
