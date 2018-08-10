import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
    // // tags: ["tag1", "tag2", "tag3"]
    // tags: []
  };

  formatCount() {
    const { value } = this.state; //destructuring this.state.count
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement = product => {
    //this.setState({ value: this.state.value + 1 }); //count++ would mutate the state directly
    //http://lucybain.com/blog/2016/react-state-vs-pros/ setState warning two!
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //arrow function to pass property
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length ? (
          <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        ) : (
          <p>No tags</p>
        )} */}
      </div>
    );
  }
}

export default Counter;
