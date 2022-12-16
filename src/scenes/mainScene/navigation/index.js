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
      <div>Query:{params.query}</div>
      <div>Title:{params.title}</div>
      <div>Author:{params.author}</div>
      <div>Subject:{params.subject}</div>
      <div>Place:{params.place}</div>
      <div>Person:{params.person}</div>
      <div>Language:{params.language}</div>
      <div>Publisher:{params.publisher}</div>
      <Profile />
    </nav>
  );
}
