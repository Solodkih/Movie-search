import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWork, selectBookByKey } from '../../../redux/bookSlice';
import { createAuthorsByArrayKey } from '../../../redux/authorSlice';
import BookView from './bookView';

export default function Book({ className = '' }) {
  const { worksId } = useParams();
  const dispatch = useDispatch();
  const bookSelect = useSelector((state) => {
    return selectBookByKey(state, worksId);
  });
  const download =
    useSelector((state) => {
      return state.book.statusDownloadWork;
    }) || false;
  const authors = useSelector(createAuthorsByArrayKey(bookSelect.authors));
  const book = { bookData: bookSelect, authors };
  const navigate = useNavigate();

  function handleOnClickAuthor(event, keyAuthor) {
    event.preventDefault();
    navigate(keyAuthor);
  }

  useEffect(() => {
    if (bookSelect.key === `/works/${worksId}` && bookSelect.download) return;
    dispatch(fetchWork(worksId));
  }, []);

  return (
    <BookView
      book={book}
      handleOnClickAuthor={handleOnClickAuthor}
      className={className}
      download={download}
    />
  );
}

Book.propTypes = {
  className: PropTypes.string,
};

Book.defaultProps = {
  className: '',
};
