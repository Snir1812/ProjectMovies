import React from "react";
import ReactDOM from "react-dom/client";
import "./themed-bootstrap.scss";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter } from "react-router-dom";
import { SwitchMoviesContextProvider } from "./context/useSwitchMovies";
import { MdCategory } from "react-icons/md";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <SwitchMoviesContextProvider> */}
      <App />
      {/* </SwitchMoviesContextProvider> */}
    </Provider>
  </BrowserRouter>
);
