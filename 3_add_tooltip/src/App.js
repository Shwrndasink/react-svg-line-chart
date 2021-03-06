import React, { Component } from 'react';
import './App.css';
import LineChart from './LineChart';
import ToolTip from './ToolTip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePoint: null,
      toolTipTrigger: null
    }
  }

  handlePointHover = (point, trigger) => {
    this.setState({
      activePoint: point,
      toolTipTrigger: trigger
    })
  }

  createFakeData() {
    console.log(this.state);
    // This function creates data that doesn't look entirely random
    const data = []

    for (let x = 0; x <= 30; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length-1].y : 50;
      const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      data.push({x,y})
    }
    return data;
  }

  render() {
    return (
      <div className="App">

        { this.state.toolTipTrigger
          ? (
            <ToolTip trigger={ this.state.toolTipTrigger }>
              <div>y : { this.state.activePoint.y }</div>
              <div>x : { this.state.activePoint.x }</div>
            </ToolTip>
          )
          : null
        }

        <div className="header">react svg line chart [part 2]</div>
        <LineChart data={this.createFakeData()} onPointHover={ this.handlePointHover } />
        <LineChart data={this.createFakeData()} onPointHover={ this.handlePointHover } color={'#F44336'}  />
      </div>
    );
  }
}

export default App;
