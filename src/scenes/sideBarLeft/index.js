import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AdvanceSearch from './advanceSearch';
import QuerySearch from './querySearch';
import useGetSearchParams from '../../components/hooks/useGetSearchParams';
import useSetUrl from '../../components/hooks/useSetUrl';
import { useResize } from '../../components/hooks/useResize';

import Logo from '../../components/logo';
import Loupe from '../../components/loupe';

import './sideBarLeft.scss';

export default function SideBarLeft({ className, showMenu, setShowMenu }) {
  const [params, setParams] = useState({
    query: '',
    title: '',
    author: '',
    subject: '',
    place: '',
    person: '',
    publisher: '',
  });

  const { isScreenSm } = useResize();

  const handleSetParam = useSetUrl(params);

  useGetSearchParams((searchParams) => {
    setParams((oldFilter) => {
      return {
        title: searchParams.title ? searchParams.title : oldFilter.title,
        author: searchParams.author ? searchParams.author : oldFilter.author,
        query: searchParams.query ? searchParams.query : oldFilter.query,
        subject: searchParams.subject ? searchParams.subject : oldFilter.subject,
        place: searchParams.place ? searchParams.place : oldFilter.place,
        person: searchParams.person ? searchParams.person : oldFilter.person,
        publisher: searchParams.publisher
          ? searchParams.publisher
          : oldFilter.publisher,
      };
    });
  });

  const handleOnClickReset = (event) => {
    event.preventDefault();
    setParams((oldParams) => {
      const newParams = { ...oldParams };
      newParams[event.target.dataset.name] = '';
      return newParams;
    });
  };

  const handleOnClickSetValue = (event) => {
    event.preventDefault();
    setParams((oldParams) => {
      const newParams = { ...oldParams };
      newParams[event.target.dataset.name] = event.target.value;
      return newParams;
    });
  };

  return (
    <aside className={`${className} side-bar-left`}>
      <div className="side-bar-left__container">
        <div className="side-bar-left__item-logo">
          <Logo className="side-bar-left__logo" />
          <button
            className="side-bar-left__bnt-show-search"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Loupe />
          </button>
        </div>
        {(isScreenSm || showMenu) && (
          <QuerySearch
            className="side-bar-left__item"
            query={params.query}
            handleOnClickSetValue={handleOnClickSetValue}
            handleOnClickReset={handleOnClickReset}
          />
        )}
        {(isScreenSm || showMenu) && (
          <AdvanceSearch
            className="side-bar-left__item"
            params={params}
            handleOnClickSetValue={handleOnClickSetValue}
            handleOnClickReset={handleOnClickReset}
          />
        )}
        {(isScreenSm || showMenu) && (
          <button
            type="button"
            className="menu-side-bar__button-search"
            onClick={handleSetParam}
          >
            SEACH
          </button>
        )}
      </div>
    </aside>
  );
}

SideBarLeft.propTypes = {
  className: PropTypes.string.isRequired,
};
