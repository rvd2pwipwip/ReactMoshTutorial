import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  // useEffect(() = {}, count)

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  return (
    <>
      <span className={getBadgeClasses(count)}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm">+</button>
    </>
  );
};

export default Counter;

const getBadgeClasses = count => {
  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";
  return classes;
};
