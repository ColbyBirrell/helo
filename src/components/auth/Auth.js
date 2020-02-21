import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import "./auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profile_pic: ""
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
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    axios
      .post(`/auth/login`, { username: username, password: password })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="auth-box">
        <h1>HeLo</h1>
        <div className="user-pass-inputs">
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

export default connect(null, { getUser })(Auth);
