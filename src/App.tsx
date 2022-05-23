import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { List } from "./components/List";
function App() {
  return (
    <div>
      <List />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
