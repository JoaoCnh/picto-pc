// @flow
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import ReduxToastr from "react-redux-toastr";

import routes from "./routes";
import configureStore from "./store/configureStore";
import "./app.global.css";

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
            <ReduxToastr progressBar={true} />
        </div>
    </Provider>,
    document.getElementById("root")
);