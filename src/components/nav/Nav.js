import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./nav.css";

class Nav extends Component {
  render() {
    console.log(this.props); // coming from redux
    return (
      <div className="nav-bar">
        {/* Nav.js */}
        <div
          className="prof-pic"
          style={{
            backgroundImage: `url('${this.props.user.profile_pic}')`
          }}
        ></div>
        <div className="username">{this.props.user.username}</div>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New Post</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return { user };
};

export default connect(mapStateToProps)(Nav);
