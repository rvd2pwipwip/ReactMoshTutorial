import React from "react";
// import "../App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <main role="main" className="container">
        <Counters />
      </main>
    </>
  );
};

export default App;
