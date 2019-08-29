import React from "react";
// import "../App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

const App = () => {
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
    <>
      <Navbar counters={counters}></Navbar>
      <main role="main" className="container">
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
          onReset={handleReset}
        />
      </main>
    </>
  );
};

export default App;
