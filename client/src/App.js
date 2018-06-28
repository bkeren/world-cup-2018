import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { results : [] }

  componentDidMount() {
    fetch('/wc18')
      .then(res => res.json())
      .then(x => { this.setState({results : x.results})});

  }

  render() {
    console.log(this.state.results);
    const groups = this.state.results.map( (res , index) =>
        <div key={index}>{res.group}</div>
      );
    return (
      <div className="App">
        {groups}
      </div>
    );
  }
}

export default App;
