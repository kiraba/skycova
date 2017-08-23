import React, { Component } from 'react';
import './Research.css';
import './Education';
import './Contact';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class Research extends Component {
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
      <div className="Title">
        <h1>Research</h1>
        <div className="Research">
        <div className="paper1">
          <div>
            <div className="thumbnail">
              <a href="#"><img className="researchPic" src="pdfIcon.png" alt="pdf"/></a>
              <div className="caption">
                  <h3>Sky's Research</h3>
                  <p>This is info about research</p>
                </div>
            </div>
          </div>
        </div>
        <div className="paper2">
          <div>
            <div className="thumbnail">
              <a href="#"><img className="researchPic" src="pdfIcon.png" alt="pdf"/></a>
                <div className="caption">
                  <h3>Sky's Research</h3>
                  <p>This is info about research</p>
                </div>
            </div>
          </div>
        </div>
        <div className="paper3">
          <div>
            <div className="thumbnail">
              <a href="#"><img className="researchPic" src="pdfIcon.png" alt="pdf"/></a>
                <div className="caption">
                  <h3>Sky's Research</h3>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
        {/*<a className="btn" href="#">Get Started</a>*/}
      </div>
    );
  };
};
