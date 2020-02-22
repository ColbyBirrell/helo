import React, { Component } from "react";
import "./post.css";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div className="post-main">
        <div className="post-title">{this.props.post.title}</div>
        <div className="post-content">{this.props.post.content}</div>
      </div>
    );
  }
}
