import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var jock = require('react-jockbar');
var $ = require('jquery');

class App extends Component {

  runTimer(){
    jock.triggerBar();
  }

  render() {

    var width = 0;
    var height = 10;
    var color = 'red';
    var time = 5;
    $('#jock-bar').html(jock.progressBar(width, height, color, time));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          First bar here
        </p>
        <div id="jock-bar"></div>
        <div>{jockBar}</div>
      </div>
    );
  }
}

export default App;
