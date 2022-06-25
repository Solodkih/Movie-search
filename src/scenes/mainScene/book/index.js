import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ className = '' }) {
  return <div className={`${className}`}>Book</div>;
}

Book.propTypes = {
  className: PropTypes.string,
};
Book.defaultProps = {
  className: null,
};
