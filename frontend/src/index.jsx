import React from "react";
import ReactDOM from "react-dom"; // Fixed typo in the import
import "./styles.css";
import App from "./components/App"; // Removed curly braces around App import
import { createRoot } from "react-dom"; // Fixed the import statement
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
