import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RootWrapper from "./components/ui/root-wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootWrapper>
      <App />
    </RootWrapper>
  </React.StrictMode>
);
