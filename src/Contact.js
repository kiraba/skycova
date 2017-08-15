import React, { Component } from 'react';
import './App.css';
import './Contact.css';
import './Education';
import './Research';
import $ from 'jquery';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      email: " ",
      services: { value: "appointment" },
      message: " ",
    };
  };

  name(event) {
    this.setState({ name: event.target.value });
  };

  email(event) {
    this.setState({ email: event.target.value });
  };

  services(event) {
    this.setState({ services: event.target.value });
  };

  message(event) {
    this.setState({ message: event.target.value });
  };
  //
  // handleSubmit(send) {
  //   $.ajax({
  //     url: '/contactus',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //         // Success..
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //         console.error(status, err.toString());
  //     }.bind(this)
  //   });
  // };

  //   })
  //   .done(function(sent) {
  //     alert("Email sent!")
  //   })
  //   .fail(function( xhr, status, errorThrown ) {
  //    alert( "Sorry, there was a problem!" );
  //    console.log( "Error: " + errorThrown );
  //    console.log( "Status: " + status );
  //    console.dir( xhr );
  //   });
  //   this.props.history.push('/Experience');
  // }

  render() {
    return (
      <div class="container">
        <form id="contact" method="post" action="contact.php" onSubmit={this.handleSubmit}>
          <fieldset>
            <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" tabindex="2" required/>
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
          </fieldset>
                <label>Regarding
                  <select name="services" value={this.state.value} onChange={this.services.bind(this)}>
                    <option value="appointment">Appointment</option>
                    <option value="inquiry">Inquiry</option>
                    <option value="workshop">Workshop</option>
                  </select>
                </label><br/>
          <fieldset>
            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
          </fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </form>
      </div>
    );
  };
};
