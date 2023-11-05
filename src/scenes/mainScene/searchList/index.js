import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useIntersect from './useIntersect';
import ItemListBooks from '../../../components/itemListBooks';
import useUpdateList from './useUpdateList';
import './searchList.scss';

export default function SearchList({ className = '' }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  useIntersect(containerRef, setPage);
  useUpdateList(books, setBooks, page, setPage);
  
  return (
    <div className={`${className} list-books`}>
      <div className="list-books__container">
        {books.map((book) => {
          return (
            <ItemListBooks
              key={`${book.title}+${book.arrayUrlImage[0]}+${book.key}`}
              className="list-books__item"
              book={book}
            />
          );
        })}
      </div>
      <div id="ref" ref={containerRef} />
    </div>
  );
}

SearchList.propTypes = {
  className: PropTypes.string,
};

SearchList.defaultProps = {
  className: null,
};
