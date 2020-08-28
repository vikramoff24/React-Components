import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { add, multiply, subtract, divide } from "./calculator.js";
ReactDOM.render(
  <div>
    <App />
    {/* for importing and exporting example */}
    <ul>
      <p>
        This is calculated in diffrent module and imported using ES6 module
        feature
      </p>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
