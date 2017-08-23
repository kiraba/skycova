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
import ReactDOM from 'react-dom';

export default class Home extends Component {
  componentDidMount() {
    var edHead = ReactDOM.findDOMNode(this);
    edHead.style.opacity=0;
    window.requestAnimationFrame(function() {
      edHead.style.transition = "opacity 1000ms";
      edHead.style.opacity = 1;
    });
  }

  render(){
    return (
      <div name="title">
        <h1>We never know what the day will bring.
          That's why my approach is awesome</h1>

        <a href="http://philome.la/jace_harr/you-feel-like-shit-an-interactive-self-care-guide/play">
          click here </a>
      </div>
    )
  }
}
