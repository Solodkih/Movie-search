import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getBooksBySearch } from '../../../util/axios/getBooksBySearch';
import ItemListBooks from '../../../components/itemListBooks';

export default function SearchList({ className = '' }) {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  useEffect(async () => {
    async function get() {
      let params = {
        query: searchParams.get('query'),
        title: searchParams.get('title'),
        author: searchParams.get('author'),
        subject: searchParams.get('subject'),
        place: searchParams.get('place'),
        person: searchParams.get('person'),
        language: searchParams.get('language'),
      };
      console.log(params);
      return params;
    }
    let params = await get();
    let books = await getBooksBySearch(params);
    setBooks(books);
  }, [searchParams]);

  return (
    <div className="list-books">
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
