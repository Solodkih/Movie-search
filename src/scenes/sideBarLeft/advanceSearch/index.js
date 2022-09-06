import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './advanceSearch.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TitleSeach from './titleSearch';

export default function AdvanceSearch({ className }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    titleData: { title: '', show: true },
  });
  useEffect(async () => {
    async function get() {
      return {
        title: searchParams.get('title'),
      };
    }
    let test = await get();
    console.log(test);
    setFilter({ titleData: { title: test.title, show: filter.titleData.show } });
  }, [searchParams]);

  function setTitle(title, show) {
    setFilter({ titleData: { title: title, show: show } });
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
      </ul>
      <button
        className="menu-side-bar__button-search"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/\search?title=${filter.titleData.title}`);
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
