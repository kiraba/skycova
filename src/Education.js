import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Link
} from 'react-router-dom'


export default class Education extends Component {
	render() {
		return(
			<div className="App">
				<div className="LoginHeader"><h1>Wildfood</h1>
				</div>
				<section className="LoginPageContainer">
				<form className="LoginForm">
				<input className="Username" type="textbox" placeholder="Username" ></input>
				<input className="Password" type="password" placeholder="Password"  ></input>
				</form>
				</section>
				<div className="LoginButton">
				<a className="btn">Login</a><br/>
				<footer className="Join"><Link to="/profile"> Not registered? Click here. :)</Link></footer>
				</div>
			</div>
	)};
}
