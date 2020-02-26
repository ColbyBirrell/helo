import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: "",
      postText: "",
      img:
        "https://lh3.googleusercontent.com/proxy/KQX0tge9tb76XBH5unwPSF0yRnfPKsR0oVA77f1ZQBbf73OJRY2aEcVvFyN60kcnLa40w41xBRHVfGAJAGQt2CsFd5sjh6KzNi62C-kAu9a_sdjjvtdcxxisg3PBA8wZmQcfHjVW"
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getPosts = (req, res) => {
    axios.get(`/api/posts`).then(res => {
      this.setState({
        postList: res.data
      });
    });
  };

  submitNewPost = () => {
    axios
      .post(`/api/posts`, {
        title: this.state.postTitle,
        content: this.state.postText,
        img: this.state.img,
        author_id: this.props.user.id
      })
      .then(res => {
        res.status(200).send(() => this.getPosts());
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-body">
        <div className="form-main">
          Create a New Post
          <img className="img-form" src={this.state.img} alt="imgprev" />
          <div className="form-inputs">
            <input
              name="postTitle"
              placeholder="Enter Post Title"
              onChange={this.handleInput}
            />
            <textarea
              name="postText"
              placeholder="Enter Post Text"
              onChange={this.handleInput}
            />
            <input
              name="img"
              placeholder="Enter img URL"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-butts">
            <Link to="/dashboard">
              <button onClick={this.submitNewPost}>Save</button>
            </Link>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};

export default connect(mapStateToProps)(Form);
