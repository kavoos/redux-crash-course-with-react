import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    const { body, title } = this.state;
    const { props } = this;
    e.preventDefault();
    const post = {
      title,
      body,
    };
    props.createPost(post);
  };

  render = () => {
    const { body, title } = this.state;
    return (
      <div>
        <h1>
          Add post
        </h1>
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="title">
            Title:
            <input name="title" type="text" value={title} onChange={e => this.onChange(e)} />
          </label>
          <label htmlFor="body">
            Body:
            <textarea name="body" value={body} onChange={e => this.onChange(e)} />
          </label>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
});

export default connect(null, mapDispatchToProps)(PostForm);
