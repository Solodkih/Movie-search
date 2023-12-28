import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function ItemSeach({
  name,
  handleOnClickReset,
  handleOnClickSetValue,
  ...props
}) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button type="button" className="menu-side-bar__button-title">
          {name}
        </button>
        <button
          data-name={props['data-name']}
          type="button"
          className="menu-side-bar__button-clear"
          onClick={handleOnClickReset}
        >
          CLEAR
        </button>
      </div>
      <Search handleChange={handleOnClickSetValue} {...props} />
    </>
  );
}

ItemSeach.propTypes = {
  'data-name': PropTypes.string,
  name: PropTypes.string,
  handleOnClickReset: PropTypes.func.isRequired,
  handleOnClickSetValue: PropTypes.func.isRequired,
};

ItemSeach.defaultProps = {
  name: '',
  'data-name': '',
};
