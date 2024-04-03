import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FormDataProvider } from "./components/Other/FormDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormDataProvider>
  </React.StrictMode>
);
