import React, { Component } from "react";
import "./post.css";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <div className="post-main">
        <img className="img-thumb" src={this.props.post.img} />
        <div className="post-title">{this.props.post.title}</div>
        <div className="post-content">{this.props.post.author_id}</div>
      </div>
    );
  }
}
