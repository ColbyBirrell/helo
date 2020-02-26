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
        <img className="img-thumb" src={this.props.post.img} alt="thumb" />
        <div className="post-title">{this.props.post.title}</div>
        <div className="post-content">{this.props.post.content}</div>
        <div className="Delete Post">
          <button
            onClick={() => {
              this.props.deletePost(this.props.post.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
