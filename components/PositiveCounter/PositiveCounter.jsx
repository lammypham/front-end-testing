import React, { Component } from 'react';

export default class PositiveCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement(){
    this.setState({
      count: Math.max(0, this.state.count - 1)
    });
  }

  render() {
    return (
      <div>
        Value: {this.state.count}
        <button className="decrement" onClick={this.decrement}>&minus;</button>
        <button className="increment" onClick={this.increment}>+</button>
      </div>
    );
  }
}