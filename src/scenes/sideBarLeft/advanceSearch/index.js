import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './advanceSearch.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TitleSeach from './titleSearch';
import AuthorSearch from './authorSearch';

export default function AdvanceSearch({
  className,
  titleData,
  setTitle,
  authorData,
  setAuthor,
}) {
  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Advance Search</div>
      <ul className="menu-side-bar__list">
        <li>
          <TitleSeach
            titleData={titleData}
            setTitle={(title, show) => {
              setTitle(title, show);
            }}
          />
        </li>
        <li>
          <AuthorSearch
            authorData={authorData}
            setAuthor={(author, show) => {
              setAuthor(author, show);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

AdvanceSearch.propTypes = {
  className: PropTypes.string.isRequired,
};
