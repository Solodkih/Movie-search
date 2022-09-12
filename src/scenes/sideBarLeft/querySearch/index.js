import Search from '../../../components/search';
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function QuerySearch({ className, queryData, setQuery }) {
  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Book search</div>
      <ul className="menu-side-bar__list">
        <li>
          <div className="menu-side-bar__buttons">
            <button
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
