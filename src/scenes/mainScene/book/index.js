import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWork, selectBookByKey } from '../../../redux/bookSlice';
import { createAuthorsByArrayKey } from '../../../redux/authorSlice';
import { fetchArrayImages } from '../../../redux/imageSlice';
import BookView from './bookView';
import { getUrlImage, SIZE_IMAGE_LARGE } from '../../../util/image';

import useGetHandlerShowImage from '../../../components/hooks/useGetHandlerShowImage';

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

  const handlerShowImage = useGetHandlerShowImage(bookSelect.arrayUrlImage);

  function handleOnClickAuthor(event, keyAuthor) {
    event.preventDefault();
    navigate(keyAuthor);
  }

  useEffect(() => {
    if (bookSelect.key === `/works/${worksId}` && bookSelect.download) return;
    dispatch(fetchWork(worksId));
  }, []);

  useEffect(() => {
    dispatch(
      fetchArrayImages(
        bookSelect.arrayUrlImage.map((item) => {
          return getUrlImage(SIZE_IMAGE_LARGE, item);
        })
      )
    );
  }, [bookSelect]);

  return (
    <BookView
      book={book}
      handleOnClickAuthor={handleOnClickAuthor}
      className={className}
      download={download}
      handlerShowImage={handlerShowImage}
    />
  );
}

Book.propTypes = {
  className: PropTypes.string,
};

Book.defaultProps = {
  className: '',
};
