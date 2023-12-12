import React, { useState } from 'react';
import './navigation.scss';
import useGetSearchParams from '../../../components/hooks/useGetSearchParams';
import useSetUrl from '../../../components/hooks/useSetUrl';

export default function Navigation() {
  const [params, setParams] = useState({});
  useGetSearchParams(setParams);
  const handleSetParam = useSetUrl(params);

  const handleDeleteParam = (event) => {
    handleSetParam(event, '');
  };

  return (
    <nav className="navigation">
      <div className="navigation_title">
        <span>{`We are looking `}</span>
        <span>a book</span>
      </div>
      {params.query && (
        <div className="navigation_item">
          <span>{`Query: `}</span>
          <span onClick={handleDeleteParam} data-name="query">
            {params.query}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
      {params.title && (
        <div className="navigation_item">
          <span>{`Title: `}</span>
          <span onClick={handleDeleteParam} data-name="title">
            {params.title}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
      {params.author && (
        <div className="navigation_item">
          <span>{`Author: `}</span>
          <span onClick={handleDeleteParam} data-name="author">
            {params.author}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
      {params.subject && (
        <div className="navigation_item">
          <span>{`Subject: `}</span>
          <span onClick={handleDeleteParam} data-name="subject">
            {params.subject}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
      {params.place && (
        <div className="navigation_item">
          <span>{`Place: `}</span>
          <span onClick={handleDeleteParam} data-name="place">
            {params.place}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
      {params.person && (
        <div className="navigation_item">
          <span>{`Person: `}</span>
          <span onClick={handleDeleteParam} data-name="person">
            {params.person}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
      {params.publisher && (
        <div className="navigation_item">
          <span>{`Publisher: `}</span>
          <span onClick={handleDeleteParam} data-name="publisher">
            {params.publisher}
          </span>
          <button className="navigation_button-cansel"></button>
        </div>
      )}
    </nav>
  );
}
