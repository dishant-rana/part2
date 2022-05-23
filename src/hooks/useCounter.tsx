import { useState } from "react";

export const useCounter = (init: number) => {
  const [count, setCount] = useState(init);
  return {
    value: count,
    increase: () => setCount((count) => count + 1),
    decrease: () => setCount((count) => count - 1),
    increase3: () => setCount((count) => count + 3),
    decrease4: () => setCount((count) => count - 4),
    set: () => setCount(100),
  };
};
