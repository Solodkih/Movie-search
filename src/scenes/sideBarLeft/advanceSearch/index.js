import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';
import './advanceSearch.scss';

export default function AdvanceSearch({ className }) {
  const [filter, setFilter] = useState({
    title: { title: '', show: true },
  });

  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Advance Search</div>
      <ul className="menu-side-bar__list">
        <li>
          <div className="menu-side-bar__buttons">
            <button
              className="menu-side-bar__button-title"
              onClick={(e) => {
                e.preventDefault();
                setFilter({
                  ...filter,
                  title: { title: filter.title.title, show: !filter.title.show },
                });
              }}
            >
              Title
            </button>
            {filter.title.show && (
              <button
                className="menu-side-bar__button-clear"
                onClick={(e) => {
                  e.preventDefault();
                  setFilter({
                    ...filter,
                    title: { title: '', show: filter.title.show },
                  });
                }}
              >
                CLEAR
              </button>
            )}
          </div>
          {filter.title.show && (
            <Search
              placeholder="e.g Pinocchio"
              value={filter.title.title}
              handleChange={(event) => {
                setFilter({
                  ...filter,
                  title: { title: event.target.value, show: filter.title.show },
                });
              }}
            />
          )}
        </li>
      </ul>
      <button
        className="menu-side-bar__button-search"
        onClick={(e) => {
          e.preventDefault();
          alert(filter.title.title);
        }}
      >
        SEACH
      </button>
    </div>
  );
}

AdvanceSearch.propTypes = {
  className: PropTypes.string.isRequired,
};
