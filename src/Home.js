import React, { Component } from 'react';
import './App.css';
import './Education';
import './Research';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
<div className="App">
  <div className="App-header">
  </div>
  <h2 className="App-Home">
  </h2>
  <a className="btn" href="#">Get Started</a>
</div>
)};
};
