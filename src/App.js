import React, { Component } from 'react';
import './App.css';
import Home from './Home'
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

export default class App extends Component {
  render() {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });

    return (
      <Router className= "page">
        <div className="centerNav">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <h1><a className="navbar-brand" href="./Home">J. Sky Cova, LPC</a></h1>
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                  data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><a className="nav-link" href="/Research">Research</a></li>
                  <li><a className="nav-link" href="/Education">Education</a></li>
                  <li><a className="nav-link" href="/Experience">Experience</a></li>
                  <li><a className="nav-link" href="/Contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <Route path= "/Home" component={Home}/>
            <Route path= "/Research" component={Research}/>
            <Route path= "/Experience" component={Experience}/>
            <Route path= "/Education" component={Education}/>
            <Route path= "/Contact" component={Contact}/>
          </div>
        </div>
      </Router>
    );
  }
}
