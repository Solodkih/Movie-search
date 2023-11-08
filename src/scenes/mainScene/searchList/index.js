import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageSearchObject } from '../../../redux/searchSlice';

import PropTypes from 'prop-types';
import useIntersect from './useIntersect';
import ItemListBooks from '../../../components/itemListBooks';
import useUpdateList from './useUpdateList';
import './searchList.scss';

export default function SearchList({ className = '' }) {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.search.page);


  const setPage = () => {
    const newPage = page + 1;
    dispatch(setPageSearchObject(newPage));
  };
  const resetPage = () => {
    dispatch(setPageSearchObject(1));
  };

  const containerRef = useRef(null);
  const intersection = useIntersect(containerRef);

  useEffect(() => {
    if (intersection) {
      setPage();
    }
  }, [intersection]);

  useUpdateList(books, setBooks, page, resetPage);

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
