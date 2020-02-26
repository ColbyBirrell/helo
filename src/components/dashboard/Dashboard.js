import React, { Component } from "react";
import "./dashboard.css";
import axios from "axios";
import Post from "../post/Post";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.history !== this.props.history) {
  //     this.getPosts();
  //   }
  // }

  getPosts = (req, res) => {
    axios
      .get(`/api/posts`)
      .then(res => {
        this.setState({
          postList: res.data
        });
      })
      .catch(err => console.log(err));
  };

  deletePost = id => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.props);
    const showAllPosts = this.state.postList.map(element => {
      return (
        <Post key={element.id} post={element} deletePost={this.deletePost} />
      );
    });
    return (
      <div className="dash-main">
        {/* Dashboard.js */}
        <div className="dash-search">
          <input className="search-box" placeholder="search here" />
          <div className="check-box">
            <input type="checkbox" />
            <label>See my posts</label>
          </div>
          <div className="search-butts">
            <button>Search</button>
            <button>Reset</button>
          </div>
        </div>
        <div className="posts-main">{showAllPosts}</div>
      </div>
    );
  }
}
