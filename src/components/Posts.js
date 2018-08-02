import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentDidMount = () => {
    this.props.fetchPosts();
  };

  renderPosts = () => {
    const { posts } = this.props;
    if (posts) {
      return posts.map(post => (
        <div key={post.id}>
          <h3>
            {post.title}
          </h3>
          <p>
            {post.body}
          </p>
        </div>
      ));
    }
    return null;
  };

  render = () => (
    <div>
      <h1>
        Posts
      </h1>
      {this.renderPosts()}
    </div>
  );
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

const mapStateToProps = state => ({
  posts: state.postReducer.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
