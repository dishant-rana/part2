import React from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const count = useCounter(10);
  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={count.increase}>Add 1</button>
      <button onClick={count.increase3}>Add 3</button>
      <button onClick={count.decrease}>Sub 1</button>
      <button onClick={count.decrease4}>Add 4</button>
      <button onClick={count.set}>Set Counter to 100</button>
      <div style={{ marginTop: "10px" }}>Value:{count.value}</div>
    </div>
  );
};
