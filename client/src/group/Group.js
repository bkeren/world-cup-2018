import React, {Component} from 'react';
import './Group.css';
import Score from '../score/Score';

class Group extends Component {

  state = {
    expandPanel : false
  }

  togglePanel() {
    this.setState({expandPanel : !this.state.expandPanel});
  }

  render() {
    return (<div style={{paddingBottom: '40px'}}>
      <button className="accordion" onClick={() => this.togglePanel()}>
        {'Group ' + this.props.groupInfo.group}
      </button>
      <div style={{display: this.state.expandPanel ? 'flex' : 'none' }}>
        <Score results={this.props.groupInfo.results}/>
      </div>
    </div>);
  }


}

export default Group;
