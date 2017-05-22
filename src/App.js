import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var jock = require('react-jockbar');
var $ = require('jquery');

class App extends Component {

  runTimer(barId){
    jock.triggerBar(barId);
  }

  render() {
    var slowBar = jock.progressBar(0, 10, 'red', 10);
    var quickBar = jock.progressBar(0, 10, 'blue', 2);
    var ploadBar = jock.progressBar(0, 10, 'black', 5);
    var tloadBar = jock.progressBar(30, 10, 'purple', 5);

    $(document).ready(function() {
      $('#slow-bar').html(slowBar);
      $('#quick-bar').html(quickBar);
      $('#pload-bar').html(ploadBar);
      $('#tload-bar').html(tloadBar);
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Jockbar</h2>
        </div>

        <div className="bar-type">
          <p className="bar-copy">
            This bar loaded on page load, in black.
          </p>
          <div id="pload-bar"></div>
        </div>

        <div className="bar-type">
          <p className="bar-copy">
            A slow bar, in red.
          </p>
          <div id="slow-bar"></div>
          <button className="btn-bars" onClick={this.runTimer('slow-bar')}>Click Me</button>
        </div>

        <div className="bar-type">
          <p className="bar-copy">
            A slow bar, in blue.
          </p>
          <div id="quick-bar"></div>
          <button className="btn-bars" onClick={this.runTimer('quick-bar')}>Click Me</button>
        </div>

        <div className="bar-type">
          <p className="bar-copy">
            A third loaded bar, in purple.
          </p>
          <div id="tload-bar"></div>
          <button className="btn-bars" onClick={this.runTimer('tload-bar')}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default App;
