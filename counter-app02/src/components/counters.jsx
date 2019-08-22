import * as React from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 },
  ]);

  const handleDelete = id => {
    setCounters(counters.filter(c => c.id !== id));
  };

  return (
    <div>
      {counters.map(c => (
        <div key={c.id}>
          <Counter value={c.value} />
          <button
            type="button"
            onClick={() => {
              handleDelete(c.id);
            }}
            className="btn btn-danger btn-sm"
            style={{ marginLeft: 3 }}
          >
            x
          </button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Counters;
