import React, {Component} from 'react';
import Group from './group/Group';


class App extends Component {

  state = {
    results: []
  }

  componentDidMount() {
    fetch('/wc18').then(res => res.json()).then(x => {
      x.results.sort((a,b) => a.group > b.group);
      this.setState({results: x.results})
    });

  }

  render() {
    const groups = this.state.results.map((res, index) => {
      return <Group key={index} groupInfo={res}></Group>
    });
    return (<div>
      {groups}
    </div>);
  }
}

export default App;
