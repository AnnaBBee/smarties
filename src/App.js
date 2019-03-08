import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    smarties: {
    brown: 2,
    orange: 4,
    lilac: 4,
    green: 2,
    yellow: 4,
    red: 5,
    blue: 6,
    pink: 3,
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    let smartie = event.target.name;
    let currentValue = this.state.smarties[smartie];
    let newValue = currentValue - 1;
    if( currentValue <= 1){
      let smartiesObject = this.state.smarties;
      delete smartiesObject[smartie];
      this.setState(() => ({
        smarties: smartiesObject
      }));
    } else {
    this.setState(prevState => ({
      smarties: {
        ...prevState.smarties,
        [smartie]: newValue
      }
    }))
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Who would like some smarties? :) </h1>
          <div>
            {Object.keys(this.state.smarties).map((key, i) => {
              const myStyle = {
                color: key,
              };
              return (
              <div>
                <span style={myStyle}>{key}</span>
                <button id="smartiesDiv" onClick={this.handleClick} name={key}> Yes, {this.state.smarties[key]} left!
                </button>
              </div>
              )
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
