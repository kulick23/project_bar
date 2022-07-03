import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "../Login.css";
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      login: "",
      password: "",
      name: "",
      phoneNumber: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    //const axios = require('axios');

    axios.get(`http://localhost:6001/login/${this.state.login}`)
    .then( function (response) {
      if(response.data == null){
        axios.post(`http://localhost:6001/users/${user}`)
        window.location.replace("http://localhost:3000/registrprofile");

      }
      console.log(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
      /*.then(res => {
        const persons = res.data;
        this.setState({ persons });
      })*/
  }

  render() {
    return (
      
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="login">
              E-Mail Address or login
            </label>
            <input
              type="text"
              id="login"
              className="formFieldInput"
              placeholder="Enter your login or email"
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="formFieldInput"
              placeholder="Enter your phone number(+999-99-999-99-99)"
              name="phoneNumber"
              pattern="[+]{1}[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"//+375-29-130-29-86
              value={this.state.phoneNumber}
              onChange={this.handleChange}
             />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
