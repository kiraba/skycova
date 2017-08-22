import React, { Component } from 'react';
import App from './App.js';
import './App.css';
import Contact from './Contact';
import Education from './Education';
import Research from './Research';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class Experience extends Component {
  componentDidMount() {
    var edHead = ReactDOM.findDOMNode(this);
    edHead.style.opacity=0;
    window.requestAnimationFrame(function() {
      edHead.style.transition = "opacity 1000ms";
      edHead.style.opacity = 1;
    });
  }
  render() {
    return (
      <div>
        <a className="btn" href="#">Get Started</a>
      </div>
    );
  };
};
