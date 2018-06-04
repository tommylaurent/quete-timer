import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";
//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
