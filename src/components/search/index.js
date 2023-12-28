import React from 'react';
import './search.scss';
import PropTypes from 'prop-types';

export default function Search({ handleChange, ...props }) {
  return (
    <div className="search">
      <input
        type="textarea"
        className="search__input"
        onChange={(event) => {
          event.preventDefault();
          handleChange(event);
        }}
        {...props}
      />
    </div>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
  imageButtonSeach: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

Search.defaultProps = {
  placeholder: '',
  imageButtonSeach: '',
  value: '',
  handleChange: () => {},
};
