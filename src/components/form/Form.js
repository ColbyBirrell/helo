import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Form extends Component {
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

  // submitNewPost = () => {
  //   axios.post(`/api/posts`, {
  //     title: this.state.postTitle,
  //     content: this.state.postText,
  //     author_id: this.props.user.id
  //   })
  //   .then((res) => {res.status(200).send()

  //   })
  // };

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

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    user
  };
};

export default connect(mapStateToProps)(Form);
