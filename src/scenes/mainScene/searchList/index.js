import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import getBooksBySearch from '../../../util/axios/getBooksBySearch';
import ItemListBooks from '../../../components/itemListBooks';

export default function SearchList({ className = '' }) {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
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
    </div>
  );
}

SearchList.propTypes = {
  className: PropTypes.string,
};

SearchList.defaultProps = {
  className: null,
};
