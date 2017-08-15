import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
import Research from './Research';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Link
} from 'react-router-dom';


export default class Education extends Component {
  render() {
	   return(
			<div className="App">
				<div className="LoginHeader"><h1>Edumication</h1></div>
				    <p className="education"> 
              Sept. 20XX - Present, Shanghai University, BE
              Candidate for Bachelor in Mechanical Engineering (ME)
              Major academic course highlights: Company Property Management, Marketing, Technology Communication, Information Management System, Modern Fabrication System
              May 20XX, Certified Public Accounting Training (CPA)
				    </p>
				</div>
	)};
}
