import React, { useState } from 'react';
import './navigation.scss';
import useGetSearchParams from '../../../components/hooks/useGetSearchParams';

export default function Navigation() {
  const [params, setParams] = useState({});
  useGetSearchParams(setParams);

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
