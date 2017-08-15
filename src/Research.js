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
                  <p>This is info about research</p>
                </div>
            </div>
          </div>
        </div>
        {/*<a className="btn" href="#">Get Started</a>*/}
      </div>
    );
  };
};
