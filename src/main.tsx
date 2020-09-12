import * as React from "react";
import * as ReactDOM from "react-dom";
import SubComponent from "./Sub";
import "./scss/index.scss";

const App: React.FC = () => {
  return (
    <>
      <h1>React Template</h1>
      <SubComponent name='Sub' />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
