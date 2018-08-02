import React, {Component} from 'react';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
    }

    renderPosts = () => {

        if (this.state.posts.length) {
            return this.state.posts.map(post => (
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

export default Posts;