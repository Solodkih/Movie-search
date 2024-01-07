import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchWork,
  selectBookByKey,
} from '../../../redux/bookSlice';
import { createAuthorsByArrayKey } from '../../../redux/authorSlice';
import {
  fetchArrayImages,
  STATUS_IMAGE_ERROR,
  STATUS_IMAGE_PENDING,
} from '../../../redux/imageSlice';
import BookView from './bookView';
import { getUrlImage, SIZE_IMAGE_LARGE } from '../../../util/image';

import useGetInternalUrlImage from '../../../components/hooks/useGetInternalUrlImage';
import useGetHandlerShowImage from '../../../components/hooks/useGetHandlerShowImage';

export default function Book({ className = '' }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { worksId } = useParams();

  const book = useSelector((state) => {
    return selectBookByKey(state, worksId);
  });
  const download =
    useSelector((state) => {
      return state.book.statusDownloadWork;
    }) || false;
  const authors = useSelector(createAuthorsByArrayKey(book.authors));

  const handlerShowImage = useGetHandlerShowImage(book.arrayUrlImage);
  let urlImage = useGetInternalUrlImage(
    getUrlImage(SIZE_IMAGE_LARGE, book.arrayUrlImage[0])
  );

  if (urlImage === STATUS_IMAGE_ERROR || urlImage === STATUS_IMAGE_PENDING) {
    urlImage = null;
  }

  function handleOnClickAuthor(event, keyAuthor) {
    event.preventDefault();
    navigate(keyAuthor);
  }

  useEffect(() => {
    if (book.key === `/works/${worksId}` && book.download) return;
    dispatch(fetchWork(worksId));
  }, []);

  useEffect(() => {
    dispatch(
      fetchArrayImages(
        book.arrayUrlImage.map((item) => {
          return getUrlImage(SIZE_IMAGE_LARGE, item);
        })
      )
    );
  }, [book]);

  return (
    <BookView
      book={book}
      authors={authors}
      handleOnClickAuthor={handleOnClickAuthor}
      className={className}
      download={download}
      handlerShowImage={handlerShowImage}
      urlImage={urlImage}
    />
  );
}

Book.propTypes = {
  className: PropTypes.string,
};

Book.defaultProps = {
  className: '',
};
