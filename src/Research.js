import React, { Component } from 'react';
import './App.css';
import './Education';
import './Contact';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Research extends Component {
  render() {
    return (
<div className="App">
  <h2>In general, how would you describe
  the eating style/needs of your group?</h2><br/>
    <select className="energylevel">
      <option value=""></option>
      <option value="Light">Light Eaters</option>
        <option value="Normal">Normal</option>
      <option value="Heavy">Eat alot</option>
    </select><br/>
  <a className="btn" href="#">Get Started</a>

</div>
)};
};

//energylevel onChange={this.energylevelSet.bind(this)} value={this.state.energylevel}
//inputs for diet checked={this.state.vaccinations} onChange={this.vacChange.bind(this)}
