import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import getBooksBySearch from '../../../util/axios/getBooksBySearch';
import ItemListBooks from '../../../components/itemListBooks';

export default function SearchList({ className = '' }) {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const containerRef = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(async () => {
    async function get() {
      const params = {
        query: searchParams.get('query'),
        title: searchParams.get('title'),
        author: searchParams.get('author'),
        subject: searchParams.get('subject'),
        place: searchParams.get('place'),
        person: searchParams.get('person'),
        language: searchParams.get('language'),
        publisher: searchParams.get('publisher'),
      };
      return params;
    }
    const params = await get();
    const responsBooks = await getBooksBySearch(params);
    setBooks(responsBooks);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(22)
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [searchParams]);

  return (
    <div className={`${className} list-books`}>
      <div className="list-books__container">
        {books.map((book) => {
          return (
            <ItemListBooks
              key={`${book.title}+${book.urlImage}`}
              className="list-books__item"
              book={book}
            />
          );
        })}
      </div>
      <div ref={containerRef}></div>
    </div>
  );
}

SearchList.propTypes = {
  className: PropTypes.string,
};

SearchList.defaultProps = {
  className: null,
};
