import React from 'react';
import PropTypes from 'prop-types';

import './logo.scss';

export default function Logo({ className }) {
  return (
    <div className={`${className} logo`}>
      <div className="logo__title">BOOKS</div>
      <div className="logo__subtitle">SEARCH</div>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
