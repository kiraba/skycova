import React, { Component } from 'react';
import './Education.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class Education extends Component {
  componentDidMount() {
    var edHead = ReactDOM.findDOMNode(this);
    edHead.style.opacity=0;
    window.requestAnimationFrame(function() {
      edHead.style.transition = "opacity 1000ms";
      edHead.style.opacity = 1;
    });
  }
  render() {
	   return(
			<div className="Education">
				<div id="edHead"><h1>Edumication</h1></div>
				    <p className="education">
              Introduction: My name is Sky.  I am from helena and I love the outdoors!!
            </p>
            <ul>
              <li>Education Specialist (Ed.S) coursework completed-University of Montana</li>
              <li>Masters of Arts (MA) in Counseling-University of Montana</li>
              <li>Bachelor of Arts (BA) in Psychology-University of Montana</li>
              <li>Coursework towards BA -University of California, Los Angeles</li>
            </ul>
            <h3>Areas of Experience:</h3>
            <ul>
              <li>Private practice serving as psychotherapist
                (individual and group, consultant, mediator,
                  clinical supervisor</li>
              <li>Employee Assistance Program consultant/counselor</li>
              <li>Regional Coordinator, Eating Disorders Awareness</li>
              <li>Critical Incident Stress Debriefing</li>
              <li>Suicide prevention and assessment</li>
              <li>Committee-accomplishing current Montana Divorce Statutes
                adopted for use by Montana Supreme Court</li>
              <li>Clinical Supervisor and Trainer, domestic violence and child abuse</li>
              <li>Outreach Therapist and Coordinator-Psychiatric Hospital</li>
              <li>Academic Research</li>
              <li>Assessment tool development</li>
            </ul>
				</div>
	)};
}
