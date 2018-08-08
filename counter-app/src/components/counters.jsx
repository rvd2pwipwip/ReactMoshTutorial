import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.counters.map(counter => (
          <li>
            <Counter key={counter.id} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Counters;
