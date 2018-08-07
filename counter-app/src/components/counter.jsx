import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  // formatCount() {
  //   const { count } = this.state; //destructuring this.state.count
  //   return count === 0 ? "Zero" : count;
  // }
  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }
  render() {
    return (
      <React.Fragment>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
        {this.state.tags.length ? (
          <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        ) : (
          <p>No tags</p>
        )}
      </React.Fragment>
    );
  }
}

export default Counter;
