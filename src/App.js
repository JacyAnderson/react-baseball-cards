import React, { Component } from 'react';
// import logo from './rockiesLogo.svg';

import Cards from './Cards.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
    this.state = {
      players: props.players,
      imageStatus: 'loading'
    };  
  }
  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }
   
  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }
  render() {
    return (
      <div className="App container">
        <Cards 
          players={this.state.players}
          handleImageLoaded={this.handleImageLoaded}
          handleImageErrored={this.handleImageErrored}
        />
      </div>
    );
  }
}


export default App;

// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>