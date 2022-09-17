import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function QuerySearch({ className, queryData, setQuery }) {
  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Book search</div>
      <ul className="menu-side-bar__list">
        <li>
          <div className="menu-side-bar__buttons">
            <button
              type="button"
              className="menu-side-bar__button-title"
              onClick={(e) => {
                e.preventDefault();
                setQuery(queryData.query, !queryData.show);
              }}
            >
              Book search
            </button>
            {queryData.show && (
              <button
                type="button"
                className="menu-side-bar__button-clear"
                onClick={(e) => {
                  e.preventDefault();
                  setQuery('', queryData.show);
                }}
              >
                CLEAR
              </button>
            )}
          </div>
          {queryData.show && (
            <Search
              placeholder="e.g "
              value={queryData.query}
              handleChange={(event) => {
                setQuery(event.target.value, queryData.show);
              }}
            />
          )}
        </li>
      </ul>
    </div>
  );
}

QuerySearch.propTypes = {
  className: PropTypes.string,
  queryData: PropTypes.shape({
    query: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setQuery: PropTypes.func,
};

QuerySearch.defaultProps = {
  className: '',
  queryData: PropTypes.shape({
    query: '',
    show: false,
  }),
  setQuery: () => {},
};
