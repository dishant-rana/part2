import React from "react";
import { useList } from "../hooks/useList";

export const List = () => {
  const list: any = useList([1, 2, 3]);
  return (
    <div>
      <button onClick={list.append}>Append</button>
      <button onClick={list.pop}>Pop</button>
      <button onClick={list.clear}>Clear</button>
      <button onClick={list.reset}>Reset</button>
      <button onClick={list.double}>Double Every Element</button>
      {list.value.map((el: number, index: number) => {
        return <div key={index}>{el}</div>;
      })}
    </div>
  );
};
