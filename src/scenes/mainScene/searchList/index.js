import React, { useEffect, useState, useRef } from 'react';
import useIntersect from './useIntersect';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import ItemListBooks from '../../../components/itemListBooks';
import useUpdateList from './useUpdateList';

export default function SearchList({ className = '' }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  useIntersect(containerRef, page, setPage);
  useUpdateList(books, setBooks, page, setPage);

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
