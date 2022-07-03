import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      login: "",
      password: ""
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

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    axios.get(`http://localhost:6001/login/${this.state.login}`)
    .then( function (response) {
      console.log(response);
      if(response.data != null)
        window.location.replace("http://localhost:3000/registrprofile");
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
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address or login
            </label>
            <input
              type="text"
              id="login"
              className="formFieldInput"
              placeholder="Enter your email or login"
              name="login"
              value={this.state.login}
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
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/profile" className="formFieldLink">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;