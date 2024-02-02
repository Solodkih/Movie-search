import React, { useState } from 'react';
import './navigation.scss';
import useGetSearchParams from '../../../components/hooks/useGetSearchParams';
import useSetUrl from '../../../components/hooks/useSetUrl';
import Logo from '../../../components/logo';

export default function Navigation() {
  const [params, setParams] = useState({});
  useGetSearchParams(setParams);
  const handleSetParam = useSetUrl(params);

  const handleDeleteParam = (event) => {
    handleSetParam(event, '');
  };

  return (
    <nav className="navigation">
      <Logo className="navigation__logo" />
      <ul className="navigation__list">
        <li className="navigation__title">
          <span>{`We are looking `}</span>
          <button type="button">a book</button>
        </li>
        {params.query && (
          <li className="navigation__item">
            <span>{`Query: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="query">
              {params.query}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
        {params.title && (
          <li className="navigation__item">
            <span>{`Title: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="title">
              {params.title}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
        {params.author && (
          <li className="navigation__item">
            <span>{`Author: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="author">
              {params.author}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
        {params.subject && (
          <li className="navigation__item">
            <span>{`Subject: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="subject">
              {params.subject}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
        {params.place && (
          <li className="navigation__item">
            <span>{`Place: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="place">
              {params.place}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
        {params.person && (
          <li className="navigation__item">
            <span>{`Person: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="person">
              {params.person}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
        {params.publisher && (
          <li className="navigation__item">
            <span>{`Publisher: `}</span>
            <button type="button" onClick={handleDeleteParam} data-name="publisher">
              {params.publisher}
            </button>
            <div className="navigation__button-cansel" />
          </li>
        )}
      </ul>
    </nav>
  );
}
