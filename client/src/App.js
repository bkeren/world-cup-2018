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
    const groups = this.state.results.map( (res , index) =>
    {

      const groupResults = res.results;


      const elGroupResults = groupResults.map ((result , elIndex) => {
         let [home , away] = Object.keys(result);


         return (<div>
           <img alt="" src={`icons/${home}.png`}/>
           <img alt="" src={`icons/${away}.png`}/>
         </div>)

      })

      return (<div key={index}>
        {elGroupResults}
      </div>)
    }

    );
    return (
      <div className="App">
        {groups}
      </div>
    );
  }
}

export default App;
