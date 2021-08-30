import { store } from "./redux/store";

import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);