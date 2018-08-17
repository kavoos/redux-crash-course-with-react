import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createItem } from '../../actions/postActions';

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
    const { createPost } = this.props;
    e.preventDefault();
    const post = {
      title,
      body,
    };
    createPost(post);
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createItem(post)),
});

export default connect(null, mapDispatchToProps)(PostForm);
