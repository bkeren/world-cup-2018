import React, {Component} from 'react';
import Score from './score/Score';


class App extends Component {

  state = {
    results: []
  }

  componentDidMount() {
    fetch('/wc18').then(res => res.json()).then(x => {
      this.setState({results: x.results})
    });

  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const groups = this.state.results.map((res, index) => {
      return <Score key={index} groupResults={res.results}></Score>
    });
    return (<div>
      {groups}
    </div>);
  }
}

export default App;
