import React, { Component } from 'react';

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
    e.preventDefault();
    const post = {
      title,
      body,
    };
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

export default PostForm;
