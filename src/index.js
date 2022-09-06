import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Netflix = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Netflix />, document.querySelector("#root"));
