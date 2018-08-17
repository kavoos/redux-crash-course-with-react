import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  const { message } = props;
  return (
    <h3 className="error">
      {message}
    </h3>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
