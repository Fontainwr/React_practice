import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import { createRoot } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AppState } from "./AppState"; // Corrected the import statement

ReactDOM.render(
  <AppState>
    <Router>
      <App />
    </Router>
  </AppState>,
  document.querySelector("#root")
);

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
