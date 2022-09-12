import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AdvanceSearch from './advanceSearch';
import QuerySearch from './querySearch';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Logo from './logo';

import './sideBarLeft.scss';

export default function SideBarLeft({ className }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    queryData: { query: '', show: true },
    titleData: { title: '', show: true },
    authorData: { author: '', show: true },
  });
  useEffect(async () => {
    async function get() {
      return {
        title: searchParams.get('title'),
        author: searchParams.get('author'),
        query: searchParams.get('query'),
      };
    }
    let data = await get();
    setFilter({
      ...filter,
      titleData: { title: data.title, show: filter.titleData.show },
      authorData: { author: data.author, show: filter.authorData.show },
      queryData: { query: data.query, show: filter.queryData.show },
    });
  }, [searchParams]);

  function setTitle(title, show) {
    setFilter({ ...filter, titleData: { title: title, show: show } });
  }
  function setAuthor(author, show) {
    setFilter({ ...filter, authorData: { author: author, show: show } });
  }
  function setQuery(query, show) {
    setFilter({ ...filter, queryData: { query: query, show: show } });
  }
  return (
    <aside className={`${className} side-bar-left`}>
      <div className="side-bar-left__container">
        <Logo className="side-bar-left__log" />
        <QuerySearch
          queryData={filter.queryData}
          setQuery={(query, show) => {
            setQuery(query, show);
          }}
          className="side-bar-left__item"
        />
        <AdvanceSearch
          titleData={filter.titleData}
          setTitle={(title, show) => {
            setTitle(title, show);
          }}
          authorData={filter.authorData}
          setAuthor={(author, show) => {
            setAuthor(author, show);
          }}
          className="side-bar-left__item"
        />
        <button
          className="menu-side-bar__button-search"
          onClick={(e) => {
            e.preventDefault();
            let queryUrlParams = filter.queryData.query
              ? `query=${filter.queryData.query}&`
              : '';
            let titleUrlParams = filter.titleData.title
              ? `title=${filter.titleData.title}&`
              : '';
            let authorUrlParams = filter.authorData.author
              ? `author=${filter.authorData.author}&`
              : '';
            navigate(
              `/\search?${queryUrlParams}${titleUrlParams}${authorUrlParams}`
            );
          }}
        >
          SEACH
        </button>
      </div>
    </aside>
  );
}

SideBarLeft.propTypes = {
  className: PropTypes.string.isRequired,
};
