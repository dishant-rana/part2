import { useState } from "react";

export const useList = (arr: any) => {
  const [list, setList] = useState(arr);
  return {
    value: list,
    append: () =>
      setList((list: number[]) => [...list, list[list.length - 1] + 1]),
    pop: () => {
      list.pop();
      setList((list: number[]) => [...list]);
    },
    clear: () => setList(() => []),
    reset: () => setList((list: number[]) => [...arr]),
    double: () => {
      let res: number[] = [];
      list.map((el: number) => {
        res.push(el * 2);
      });
      setList((list: number[]) => [...res]);
    },
  };
};
