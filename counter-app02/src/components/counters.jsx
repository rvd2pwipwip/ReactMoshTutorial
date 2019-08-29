import * as React from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = React.useState([
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 },
  ]);

  const handleDelete = counterId => {
    setCounters(counters.filter(c => c.id !== counterId));
  };

  const handleIncrement = counter => {
    // 1. copy current state counters
    const tempCounters = [...counters];
    // 2. get index of incremented counter
    const index = tempCounters.indexOf(counter);
    // 3. incremented counter value + 1
    tempCounters[index].value++;
    // 4. set state counters to temporary counters
    setCounters(tempCounters);
  };

  const handleReset = () => {
    setCounters(
      counters.map(c => {
        c.value = 0;
        return c;
      })
    );
  };

  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
      {counters.map(c => (
        <div key={c.id}>
          <Counter
            onIncrement={handleIncrement}
            onDelete={handleDelete}
            counter={c}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Counters;
