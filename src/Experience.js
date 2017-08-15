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

export default class Experience extends Component {
  render() {
    return (
      <div>
        <a className="btn" href="#">Get Started</a>
      </div>
    );
  };
};
