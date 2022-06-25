import React from 'react';
import PropTypes from 'prop-types';

export default function SearchList({ className = '' }) {
  return <div className={`${className}`}>SearchList</div>;
}

SearchList.propTypes = {
  className: PropTypes.string,
};

SearchList.defaultProps = {
  className: null,
};
