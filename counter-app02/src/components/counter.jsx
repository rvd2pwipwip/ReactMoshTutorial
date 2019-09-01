import * as React from "react";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const formatValue = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  const getBadgeClasses = value => {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses(counter.value)}>{formatValue()}</span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value > 0 ? false : true}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
