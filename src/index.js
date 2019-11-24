import React, { useContext } from "react";
import ReactDOM from "react-dom";

const myContext = React.createContext();

function App() {
  const context = useContext(myContext);

  return <div>{context}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
