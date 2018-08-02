import React, {Component} from 'react';

class PostForm extends Component {
    state = {
        title: '',
        body: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        }
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(post),
            })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render = () => {
        return (
            <div>
                <h1>Add post</h1>
                <form onSubmit={e => this.onSubmit(e)}>
                    <label>Title: </label>
                    <input name="title" type="text" value={this.state.title} onChange={e => this.onChange(e)}/>
                    <label>Body: </label>
                    <textarea name="body" value={this.state.body} onChange={e => this.onChange(e)}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;