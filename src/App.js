import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      brown: 2,
      orange: 4,
      lilac: 4,
      green: 2,
      yellow: 4,
      red: 5,
      blue: 6,
      pink: 3,
      showbrown: true,
      showorange: true,
      showlilac: true,
      showgreen: true,
      showyellow: true,
      showred: true,
      showblue: true,
      showpink: true
    };
    this.handleClickBrown = this.handleClickBrown.bind(this);
    this.handleClickOrange = this.handleClickOrange.bind(this);
    this.handleClickLilac = this.handleClickLilac.bind(this);
    this.handleClickGreen = this.handleClickGreen.bind(this);
    this.handleClickYellow = this.handleClickYellow.bind(this);
    this.handleClickRed = this.handleClickRed.bind(this);
    this.handleClickBlue = this.handleClickBlue.bind(this);
  }


  handleClickBrown = () => {
    if(this.state.brown === 1){
      this.setState({ showbrown: false });
    }
    this.setState((prevState, { brown }) => ({
      brown: prevState.brown - 1
    }));
  };

  handleClickOrange = () => {
    if(this.state.orange === 1){
      this.setState({ showorange: false });
    }
    this.setState((prevState, { orange }) => ({
      orange: prevState.orange - 1
    }));
  };

  handleClickLilac = () => {
    if(this.state.lilac === 1){
      this.setState({ showlilac: false });
    }
    this.setState((prevState, { lilac }) => ({
      lilac: prevState.lilac - 1
    }));
  };

  handleClickGreen = () => {
    if(this.state.green === 1){
      this.setState({ showgreen: false });
    }
    this.setState((prevState, { green }) => ({
      green: prevState.green - 1
    }));
  };

  handleClickYellow = () => {
    if(this.state.yellow === 1){
      this.setState({ showyellow: false });
    }
    this.setState((prevState, { yellow }) => ({
      yellow: prevState.yellow - 1
    }));
  };

  handleClickRed = () => {
    if(this.state.red === 1){
      this.setState({ showred: false });
    }
    this.setState((prevState, { red }) => ({
      red: prevState.red - 1
    }));
  };

  handleClickBlue = () => {
    if(this.state.blue === 1){
      this.setState({ showblue: false });
    }
    this.setState((prevState, { blue }) => ({
      blue: prevState.blue - 1
    }));
  };

  handleClickPink = () => {
    if(this.state.pink === 1){
      this.setState({ showpink: false });
    }
    this.setState((prevState, { pink }) => ({
      pink: prevState.pink - 1
    }));
  };

  render() {
    const showHideClassNameBrown = this.state.showbrown ? "display-block" : "display-none";
    const showHideClassNameOrange = this.state.showorange ? "display-block" : "display-none";
    const showHideClassNameLilac = this.state.showlilac ? "display-block" : "display-none";
    const showHideClassNameGreen = this.state.showgreen ? "display-block" : "display-none";
    const showHideClassNameYellow = this.state.showyellow ? "display-block" : "display-none";
    const showHideClassNameRed = this.state.showred ? "display-block" : "display-none";
    const showHideClassNameBlue = this.state.showblue ? "display-block" : "display-none";
    const showHideClassNamePink = this.state.showpink ? "display-block" : "display-none";

    return (
      <div className="App">
        <header className="App-header">
        <h1>Who would like some smarties? :) </h1>
          <div className={showHideClassNameBrown}>
            <span className="smartie brown">Would you like a brown smartie? </span>
            <button onClick={this.handleClickBrown}>Yes! Only {this.state.brown} left</button>
          </div>
          <div className={showHideClassNameOrange}>
            <span className="smartie orange">Would you like an orange smartie? </span>
            <button onClick={this.handleClickOrange}>Yes! Only {this.state.orange} left</button>
          </div>
          <div className={showHideClassNameLilac}>
            <span className="smartie lilac">Would you like a lilac smartie? </span>
            <button onClick={this.handleClickLilac}>Yes! Only {this.state.lilac} left</button>
          </div>
          <div className={showHideClassNameGreen}>
            <span className="smartie green">Would you like a green smartie? </span>
            <button onClick={this.handleClickGreen}>Yes! Only {this.state.green} left</button>
          </div>
          <div className={showHideClassNameYellow}>
            <span className="smartie yellow">Would you like a yellow smartie? </span>
            <button onClick={this.handleClickYellow}>Yes! Only {this.state.yellow} left</button>
          </div>
          <div className={showHideClassNameRed}>
            <span className="smartie red">Would you like a red smartie? </span>
            <button onClick={this.handleClickRed}>Yes! Only {this.state.red} left</button>
          </div>
          <div className={showHideClassNameBlue}>
            <span className="smartie blue">Would you like a blue smartie? </span>
            <button onClick={this.handleClickBlue}>Yes! Only {this.state.blue} left</button>
          </div>
          <div className={showHideClassNamePink}>
            <span className="smartie pink">Would you like a pink smartie? </span>
            <button onClick={this.handleClickPink}>Yes! Only {this.state.pink} left</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
