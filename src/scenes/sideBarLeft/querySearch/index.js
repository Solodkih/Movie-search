import React from 'react';
import PropTypes from 'prop-types';
import ItemSeach from '../advanceSearch/itemSeach';

export default function QuerySearch({
  className,
  query,
  handleOnClickReset,
  handleOnClickSetValue,
}) {
  return (
    <div className={`${className} menu-side-bar`}>
      <ul className="menu-side-bar__list">
        <li>
          <ItemSeach
            data-name="query"
            placeholder="e.g Leo"
            value={query}
            name="Query"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
      </ul>
    </div>
  );
}

QuerySearch.propTypes = {
  className: PropTypes.string,
  query: PropTypes.string,
  handleOnClickReset: PropTypes.func.isRequired,
  handleOnClickSetValue: PropTypes.func.isRequired,
};

QuerySearch.defaultProps = {
  className: '',
  query: '',
};
