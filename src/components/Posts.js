import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchItems } from '../actions/postActions';

class Posts extends Component {
  componentDidMount = () => {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  componentDidUpdate = (prevProps) => {
    const { newPost, posts } = this.props;

    if (newPost && newPost.id !== prevProps.newPost.id) {
      posts.unshift(newPost);
    }
  }

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
  newPost: PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  posts: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

Posts.defaultProps = {
  newPost: null,
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchItems()),
});

const mapStateToProps = state => ({
  newPost: state.postReducer.item,
  posts: state.postReducer.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
