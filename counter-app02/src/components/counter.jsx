import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  return (
    <>
      <span>{formatCount()}</span>
      <button>Increment</button>
    </>
  );
};

export default Counter;
