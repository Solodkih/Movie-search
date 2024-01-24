import React from 'react';
import PropTypes from 'prop-types';
import './imageNotFound.scss';

export default function ImageNotFound({ className = '' }) {
  return (
    <div className={`${className} image-not-found`}>
      Sorry, we didn&apos;t find the picture.
      <br />
      <br /> We will try to fix it soon
    </div>
  );
}

ImageNotFound.propTypes = {
  className: PropTypes.string,
};
ImageNotFound.defaultProps = {
  className: '',
};
