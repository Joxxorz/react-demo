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


      var checkFalse = 0;
      do {
        if($("#pload-bar .loading-bar").length != 0){
          setTimeout(function(){
            jock.triggerBar('pload-bar');
          }, 2000);

          checkFalse = 1;
        }
      }
      while (checkFalse < 1);
    });

    return (
      <div className="App">
        <div className="App-header">
          <h2>React Jockbar Demo</h2>
        </div>

        <div className="bar-type">
          <p className="bar-copy">
            This bar loaded on page load, in black.
          </p>
          <div id="pload-bar"></div>
        </div>

        <hr />

        <div className="bar-type">
          <p className="bar-copy">
            A slow bar, in red.
          </p>
          <div id="slow-bar"></div>
          <button className="btn-bars" onClick={() => {this.runTimer('slow-bar')}}>Click Me</button>
        </div>

        <hr />

        <div className="bar-type">
          <p className="bar-copy">
            A quick bar, in blue.
          </p>
          <div id="quick-bar"></div>
          <button className="btn-bars" onClick={() => {this.runTimer('quick-bar')}}>Click Me</button>
        </div>

        <hr />

        <div className="bar-type last-bar">
          <p className="bar-copy">
            A third loaded bar, in purple.
          </p>
          <div id="tload-bar"></div>
          <button className="btn-bars" onClick={() => {this.runTimer('tload-bar')}}>Click Me</button>
        </div>

        <div className="App-footer">
          <div className="footer-message">Buy me a coffee?</div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="joxxorz@me.com" />
            <input type="hidden" name="lc" value="SI" />
            <input type="hidden" name="item_name" value="Jock Perkins" />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="currency_code" value="GBP" />
            <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
