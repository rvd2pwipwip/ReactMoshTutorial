import * as React from "react";

const Counter = props => {
  const formatValue = () => {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  };

  const getBadgeClasses = value => {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <>
      <div style={{ display: "inline-block", width: 50 }}>
        <span
          className={getBadgeClasses(props.counter.value)}
          style={{ width: "auto" }}
        >
          {formatValue()}
        </span>
      </div>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        X
      </button>
    </>
  );
};

export default Counter;
