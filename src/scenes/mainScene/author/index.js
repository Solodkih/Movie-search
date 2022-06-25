import React from 'react';
import PropTypes from 'prop-types';

export default function Author({ className = '' }) {
  return <div className={`${className}`}>Author</div>;
}

Author.propTypes = {
  className: PropTypes.string,
};

Author.defaultProps = {
  className: null,
};
