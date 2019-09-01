import * as React from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map(c => (
        <div key={c.id}>
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={c}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Counters;
