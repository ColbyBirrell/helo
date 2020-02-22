import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postText: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        Form.js
        <input
          name="postTitle"
          placeholder="Enter Post Title"
          onChange={this.handleInput}
        />
        <input
          name="postText"
          placeholder="Enter Post Text"
          onChange={this.handleInput}
        />
      </div>
    );
  }
}
