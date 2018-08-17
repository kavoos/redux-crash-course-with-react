import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchItems } from '../../actions/postActions';
import Error from '../shared/Error';
import Loading from '../shared/Loading';
import Post from './Post';

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
    const { failed, loading, posts } = this.props;
    if (!loading.FETCH_POSTS) {
      if (!failed.FETCH_POSTS) {
        return posts.map(post => <Post key={post.id} title={post.title} body={post.body} />);
      }
      return <Error message={failed.FETCH_POSTS} />;
    }
    return <Loading />;
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
  failed: PropTypes.shape({
    FETCH_POSTS: PropTypes.string,
  }).isRequired,
  loading: PropTypes.shape({
    FETCH_POSTS: PropTypes.bool,
  }).isRequired,
  fetchPosts: PropTypes.func.isRequired,
  newPost: PropTypes.shape({
    body: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
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
  failed: state.errorReducer,
  loading: state.loadingReducer,
  newPost: state.postReducer.item,
  posts: state.postReducer.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
