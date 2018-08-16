import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
  const { body, title } = props;
  return (
    <div>
      <h3>
        {title}
      </h3>
      <p>
        {body}
      </p>
    </div>
  );
};

Post.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
