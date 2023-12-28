import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './logo.scss';

export default function Logo({ className }) {
  const navigate = useNavigate();

  function navigateToMainURL() {
    navigate('/');
  }

  return (
    <div className={`${className} logo`}>
      <div
        role="button"
        tabIndex="0"
        onClick={navigateToMainURL}
        className="logo__title"
      >
        BOOKS
      </div>
      <div role="button" tabIndex="0" className="logo__subtitle">
        SEARCH
      </div>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};
