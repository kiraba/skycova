import React, { Component } from 'react';
import './Home.css';
import Education from './Education';
import Experience from './Experience';
import Research from './Research';
import Contact from './Contact';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Home extends Component {
  render(){
    return (
      <div name="title">
        <h1>We never know what the day will bring.</h1>
      </div>
    )
  }
}
