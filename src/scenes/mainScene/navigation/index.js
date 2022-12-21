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
      <div className="navigation_title">{`We are looking for a book\u00A0`} </div>
      <div className="navigation_item">
        {params.query && <span>{`with:\u00A0${params.query}`}</span>}
      </div>
      <div className="navigation_item">
        {params.title && `Title:${params.title}`}
      </div>
      <div className="navigation_item">
        {params.author && `Author:${params.author}`}
      </div>
      <div className="navigation_item">
        {params.subject && `Subject:${params.subject}`}
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
