import React, {Component} from 'react';
import Score from '../score/Score';
import './Group.css';
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
        {'GROUP ' + this.props.groupInfo.group}
      </button>
      <div style={{display: this.state.expandPanel ? 'grid' : 'none' , justifyContent: 'center' }}>
        <Score results={this.props.groupInfo.results}/>
      </div>
    </div>);
  }


}

export default Group;
