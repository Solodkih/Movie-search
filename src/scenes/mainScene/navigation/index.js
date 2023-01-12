import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './navigation.scss';
import Profile from './profile';

export default function Navigation() {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({});

  async function getSearchParams() {
    return {
      query: searchParams.get('query'),
      title: searchParams.get('title'),
      author: searchParams.get('author'),
      subject: searchParams.get('subject'),
      place: searchParams.get('place'),
      person: searchParams.get('person'),
      language: searchParams.get('language'),
      publisher: searchParams.get('publisher'),
    };
  }

  useEffect(async () => {
    const newParams = await getSearchParams();
    setParams(newParams);
  }, [searchParams]);

  return (
    <nav className="navigation">
      <div className="navigation_title">
        {`We are looking for `}
        {<span>a book</span>}
        {params.query && ` by request: `}
        {params.query && <span>{params.query}</span>}
      </div>
      {params.title && (
        <div className="navigation_item">
          {`with title: `}
          <span>{params.title}</span>
        </div>
      )}
      {params.author && (
        <div className="navigation_item">
          {`with author: `}
          <span>{params.author}</span>
        </div>
      )}
      {params.subject && (
        <div className="navigation_item">
          {`with subject: `}
          {<span> {params.subject} </span>}
        </div>
      )}
      {params.place && (
        <div className="navigation_item">
          {`Place: `}
          {<span> {params.place} </span>}
        </div>
      )}
      {params.person && (
        <div className="navigation_item">
          {`Person: `}
          {<span> {params.person} </span>}
        </div>
      )}
      {params.publisher && (
        <div className="navigation_item">
          {`Publisher: `}
          {<span> {params.person} </span>}
        </div>
      )}
    </nav>
  );
}
