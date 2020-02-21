import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRegister = () => {
    const { username, password } = this.state;

    axios
      .post(`/auth/register`, { username: username, password: password })
      .then(res => {
        //may need redux?
        this.props.history.push("/dashboard");
      });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    axios
      .post(`/auth/login`, { username: username, password: password })
      .then(res => {
        //may need redux
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="user-pass-inputs">
          Auth.js
          <input
            name="username"
            placeholder="Enter username"
            onChange={this.handleInput}
          />
          <input
            name="password"
            placeholder="Enter password"
            onChange={this.handleInput}
          />
        </div>
        <div className="log-reg-buttons">
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </div>
    );
  }
}
