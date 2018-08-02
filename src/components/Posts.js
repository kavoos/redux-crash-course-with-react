import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchPosts} from '../actions/postActions';

class Posts extends Component {

    componentDidMount = () => {
        this.props.fetchPosts();
    }

    renderPosts = () => {
        if (this.props.posts) {
            return this.props.posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ));
        }
        return null;
    }

    render = () => {
        return (
            <div>
                <h1>Posts</h1>
                {this.renderPosts()}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
        body: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.items,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);