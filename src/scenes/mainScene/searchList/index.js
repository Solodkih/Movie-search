import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { SmallLoader } from '../../../components/loader';
import ErrorFetch from '../../../components/errors/errorFetch';
import AnswerIsNull from '../../../components/errors/answerIsNull';

import {
  setPageSearchObject,
  createSelectListWorkByArrayKey,
  STATUS_SEARCH_DOWLOAD_ERROR,
  STATUS_SEARCH_DOWLOAD_PENDING,
  STATUS_SEARCH_DOWLOAD_ANSWER_IS_NULL,
} from '../../../redux/searchSlice';

import useIntersect from './useIntersect';
import ItemListBooks from '../../../components/itemListBooks';
import useUpdateList from './useUpdateList';
import './listBooks.scss';

export default function SearchList({ className = '' }) {
  const dispatch = useDispatch();
  const url = window.location.href;
  const page = useSelector((state) => state.search.pageList[url]?.page) || 0;
  const maxPage = useSelector((state) => state.search.pageList[url]?.maxPage) || 0;
  const arrayUrl = useSelector((state) => state.search.seachList[url]) || [];
  const books = useSelector(createSelectListWorkByArrayKey(arrayUrl));
  const statusDownloadWork = useSelector((state) => {
    return state.search.statusDownloadWork;
  });

  const setPage = () => {
    dispatch(setPageSearchObject({ url, page: page + 1 }));
  };
  const resetPage = () => {
    dispatch(setPageSearchObject({ url, page: 1 }));
  };

  const containerRef = useRef(null);
  const intersection = useIntersect(containerRef);

  useEffect(() => {
    if (
      statusDownloadWork === STATUS_SEARCH_DOWLOAD_PENDING ||
      statusDownloadWork === STATUS_SEARCH_DOWLOAD_ERROR ||
      statusDownloadWork === STATUS_SEARCH_DOWLOAD_ANSWER_IS_NULL
    ) {
      return;
    }
    if (intersection) {
      if (page + 1 <= maxPage) {
        setPage();
      }
    }
  }, [intersection]);

  useUpdateList(page, books, resetPage);

  if (statusDownloadWork === STATUS_SEARCH_DOWLOAD_ANSWER_IS_NULL) {
    return <AnswerIsNull />;
  }

  if (statusDownloadWork === STATUS_SEARCH_DOWLOAD_ERROR) {
    return <ErrorFetch />;
  }

  return (
    <div className={`${className} list-books`}>
      <div className="list-books__container">
        {books.map((book) => {
          return (
            <ItemListBooks
              key={`${book.title}+${book.key}`}
              className="list-books__item"
              book={book}
            />
          );
        })}
      </div>
      {statusDownloadWork == STATUS_SEARCH_DOWLOAD_PENDING && <SmallLoader />}
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
