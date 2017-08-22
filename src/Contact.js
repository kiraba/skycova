import React, { Component } from 'react';
import './App.css';
import './Contact.css';
import './Education';
import './Research';
import $ from 'jquery';
import ReactDOM from 'react-dom';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      tel: '',
      message: '',
    };
    this.name = this.name.bind(this);
    this.email = this.email.bind(this);
    this.tel = this.tel.bind(this);
    // this.services = this.services.bind(this);
    this.message = this.message.bind(this);
  };
  name(event) {
    this.setState({ name: event.target.value });
  };

  email(event) {
    this.setState({ email: event.target.value });
  };

  tel(event) {
    this.setState({ tel: event.target.value });
  };

  // services(event) {
  //   this.setState({ services: event.target.value });
  // };

  message(event) {
    this.setState({ message: event.target.value });
  };
handleSubmit(event){
  alert('email was submitted');
  $.ajax({
    type: 'Post',
    data: 'this.state',
    contentType: 'application/json',
        url: 'http://localhost:3000/api/contact',
        success: function(mailData) {
            console.log('successfully posted to server.');
        }
  })
};
componentDidMount() {
  var edHead = ReactDOM.findDOMNode(this);
  edHead.style.opacity=0;
  window.requestAnimationFrame(function() {
    edHead.style.transition = "opacity 1000ms";
    edHead.style.opacity = 1;
  });
}
  // event.preventDefault()
  //
  //   fetch('/api/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: 'this.state.name',
  //       email: 'this.state.email',
  //       tel: 'this.state.tel',
  //       service: 'this.state.services',
  //       message: 'this.state.message'
  //       // then continue this with the other inputs, such as email body, etc.
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     if (responseJson.success) {
  //       this.setState({formSent: true})
  //     }
  //     else this.setState({formSent: false})
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  render() {
    return (
      <div>
      <h1>Contact</h1>
  <h2>Feel free to contact me by phone,
    or use the contact form below.</h2>

  <h3>Sky sky SKYYY, MA, LCPC<br/>
      Counseling Services<br/>
      111 N. Higgins Avenue<br/>
      Missoula, Montana 59802<br/>
      406.360.3262<br/>
  </h3>
  <h2>Contact Form:</h2>
      <div className="container">
        <form id="contact" onSubmit={this.handleSubmit}>
          <fieldset>
            <input placeholder="Your name" type="text" tabIndex="1" value={this.state.name} onChange={this.name} required autoFocus/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabIndex="2" value={this.state.email} onChange={this.email} required/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" value={this.state.tel} onChange={this.tel}/>

            <textarea placeholder="Type your message here...." tabIndex="5" value={this.state.message} onChange={this.message} required></textarea>
          </fieldset>
            <button name="submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
    );
  };
};
