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

  getPosts = (req, res) => {
    axios.get(`/api/posts`).then(res => {
      this.setState({
        postList: res.data
      });
    });
  };

  render() {
    const showAllPosts = this.state.postList.map(element => {
      return <Post key={element.id} post={element} />;
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
