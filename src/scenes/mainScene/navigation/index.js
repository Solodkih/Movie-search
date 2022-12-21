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
      <div className="navigation_item">
        {params.title && `with title: `}
        {params.title && <span>{params.title}</span>}
      </div>
      <div className="navigation_item">
        {params.author && `with author: `}
        {params.author && <span>{params.author}</span>}
      </div>
      <div className="navigation_item">
        {params.subject && `with subject: `}
        {params.subject && <span> {params.subject} </span>}
      </div>
      <div className="navigation_item">
        {params.place && `Place:${params.place}`}
      </div>
      <div className="navigation_item">
        {params.person && `Person:${params.person}`}
      </div>
      <div className="navigation_item">
        {params.language && `Language:${params.language}`}
      </div>
      <div className="navigation_item">
        {params.publisher && `Publisher:${params.publisher}`}
      </div>
    </nav>
  );
}
