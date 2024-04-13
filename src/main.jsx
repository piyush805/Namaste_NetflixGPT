import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./containers/Body.jsx";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Body />
    </Provider>
  </React.StrictMode>
);


