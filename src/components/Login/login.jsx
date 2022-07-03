import React, {useContext, useState, Component} from 'react';
import http from '../../http'
import {LOGIN} from "../../reducer/reducer";
import Context from "../../context/context";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./Sing/SingIn";
import SignInForm from "./Sing/SingUp";
import "./Login.css";
// const Login = (props) => {
//   //  const { dispatch } = useContext(Context);
//     const [values, setValues] = useState({ username:'', password:'' });
//     const onChange = (e) => {
//         const field = e.target.id;
//         setValues({...values, [field]: e.target.value})
//     };
//     const login = (e) => {
//         e.preventDefault();
//         http.post('https://fakestoreapi.com/auth/login', values).then((res) => {
//             //dispatch({ type: LOGIN, data: res.data.token });
//             window.localStorage.setItem("token", res.data.token)
//         }).catch((e) => console.log(e))
//     };
    class Login extends Component {
        render() {
          return (
            <Router basename="/react-auth-ui/">
              <div className="App">
                <div className="appAside" />
                <div className="appForm">
                  <div className="pageSwitcher">
                    <NavLink
                      to="/sign-in"
                      activeClassName="pageSwitcherItem-active"
                      className="pageSwitcherItem"
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      exact
                      to="/"
                      activeClassName="pageSwitcherItem-active"
                      className="pageSwitcherItem"
                    >
                      Sign Up
                    </NavLink>
                  </div>
      
                  <div className="formTitle">
                    <NavLink
                      to="/sign-in"
                      activeClassName="formTitleLink-active"
                      className="formTitleLink"
                    >
                      Sign In
                    </NavLink>{" "}
                    or{" "}
                    <NavLink
                      exact
                      to="/"
                      activeClassName="formTitleLink-active"
                      className="formTitleLink"
                    >
                      Sign Up
                    </NavLink>
                  </div>
      
                  <Route exact path="/" component={SignUpForm} />
                  <Route path="/sign-in" component={SignInForm} />
                </div>
              </div>
            </Router>
          );
        }
      };
//};

export default Login;