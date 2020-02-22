import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dash-main">
        Dashboard.js
        <input placeholder="search here" />
        <input type="checkbox" />
        <button>Search</button>
        <button>Reset</button>
      </div>
    );
  }
}
