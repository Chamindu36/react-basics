import React, { Component } from "react";
import FunctionalApp from "./Components/FunctionalApp";
import NewsApp from "./Components/NewsApp";

// Using Class Componet
class App extends Component {
  state = {
    count: 0,
  };
  ß;

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // componentDidMount() {
  //   document.title = `Clicked ${this.state.count} times.`;
  // }

  // componentDidUpdate() {
  //   document.title = `Clicked ${this.state.count} times.`;
  // }

  render() {
    return (
      <div>
        {/* <h2>Counter App</h2>
        <button onClick={this.increment}>
          Clicked {this.state.count} times.
        </button>

        <p>
          <FunctionalApp />
        </p>
        <hr /> */}
        <p>
          <NewsApp />
        </p>
      </div>
    );
  }
}

export default App;
