import React, {Component} from 'react';
import './Score.css';
import {COUNTRIES} from '../data/countries';

class Score extends Component {

  state = {
    indexCtr: 0
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {

    const elGroupResults = this.props.groupResults.map((result, elIndex) => {
      let [home, away] = Object.keys(result);
      return (<div className="result">
        <div className="homet">
          <span>{this.capitalize(COUNTRIES[home])}</span>
        </div>
        <div className="home">
          <img className="home-icon" alt="" src={`icons/${home}.png`}/>
        </div>
        <div className="score">
          <span>{result[home]}
            - {result[away]}</span>
        </div>
        <div className="away">
          <img className="away-icon" alt="" src={`icons/${away}.png`}/>
        </div>
        <div className="awayt">
          <span>{this.capitalize(COUNTRIES[away])}</span>
        </div>

      </div>)

    });

    return (<div>
      {elGroupResults}
    </div>);
}
}

export default Score;
