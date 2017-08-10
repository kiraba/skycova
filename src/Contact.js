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

export default class Contact extends Component {
  render() {
    return (
<div className="App">
  <div className="App-header">
    <h1>Wildfood</h1>
  </div>
  <h2 className="App-intro">Food planning for your adventure...
  </h2>
  <a className="btn" href="#">Get Started</a>
</div>
)};
};
