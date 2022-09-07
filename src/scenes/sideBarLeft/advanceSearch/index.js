import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './advanceSearch.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TitleSeach from './titleSearch';
import AuthorSearch from './authorSearch';

export default function AdvanceSearch({ className }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    titleData: { title: '', show: true },
    authorData: { author: '', show: true },
  });
  useEffect(async () => {
    async function get() {
      return {
        title: searchParams.get('title'),
        author: searchParams.get('author'),
      };
    }
    let data = await get();
    setFilter({
      ...filter,
      titleData: { title: data.title, show: filter.titleData.show },
      authorData: { author: data.author, show: filter.authorData.show },
    });
  }, [searchParams]);

  function setTitle(title, show) {
    setFilter({ ...filter, titleData: { title: title, show: show } });
  }
  function setAuthor(author, show) {
    setFilter({ ...filter, authorData: { author: author, show: show } });
  }

  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Advance Search</div>
      <ul className="menu-side-bar__list">
        <li>
          <TitleSeach
            titleData={filter.titleData}
            setTitle={(title, show) => {
              setTitle(title, show);
            }}
          />
        </li>
        <li>
          <AuthorSearch
            authorData={filter.authorData}
            setAuthor={(author, show) => {
              setAuthor(author, show);
            }}
          />
        </li>
      </ul>
      <button
        className="menu-side-bar__button-search"
        onClick={(e) => {
          e.preventDefault();

          let titleUrlParams = filter.titleData.title
            ? `title=${filter.titleData.title}&`
            : '';
          let authorUrlParams = filter.authorData.author
            ? `author=${filter.authorData.author}&`
            : '';
          navigate(`/\search?${titleUrlParams}${authorUrlParams}`);
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
