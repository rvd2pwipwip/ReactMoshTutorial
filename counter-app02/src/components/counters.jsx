import * as React from "react";
import Counter from "./counter";

const Counters = props => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={props.onReset}>
        Reset
      </button>
      {props.counters.map(c => (
        <div key={c.id}>
          <Counter
            onIncrement={props.onIncrement}
            onDelete={props.onDelete}
            counter={c}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Counters;
