import React, { Component } from 'react';
import './App.css';
import {COUNTRIES} from './data/countries';

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


         return (<div className="result">
           <div className="homet">
             <span>{COUNTRIES[home].toUpperCase()}</span>
           </div>
           <div className="home">
               <img className="home-icon" alt="" src={`icons/${home}.png`}/>
           </div>
           <div className="score">
              <span>{result[home]} - {result[away]}</span>
           </div>
           <div className="away">
               <img className="away-icon" alt="" src={`icons/${away}.png`}/>
           </div>
           <div className="awayt">
             <span>{COUNTRIES[away].toUpperCase()}</span>
           </div>

         </div>)

      })

      return (<div key={index}>
        {elGroupResults}
      </div>)
    }

    );
    return (
      <div>
        {groups}
      </div>
    );
  }
}

export default App;
