import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './itemListBooks.scss';
import { getUrlImage, SIZE_IMAGE_SMALL, SIZE_IMAGE_MEDIUM } from '../../util/image';

function imageNotFound() {
  return (
    <div className="item-list-books__imageNotFound">
      Sorry, we didn&apos;t find the picture.
      <br />
      <br /> We will try to fix it soon
    </div>
  );
}

export default function ItemListBooks({ className, book = { title: 'Not found' } }) {
  const MAX_LENGTH_STRING = 35;
  const navigate = useNavigate();

  function handleOnClick(event) {
    event.preventDefault();
    navigate(book.key);
  }

  const checkAndTrimString = (string) => {
    if (typeof string === 'string' && string.length > MAX_LENGTH_STRING) {
      return string.slice(0, MAX_LENGTH_STRING).concat('...');
    }
    return string;
  };

  return (
    <div
      role="presentation"
      className={`${className} item-list-books`}
      onClick={(event) => handleOnClick(event)}
    >
      <div className="item-list-books__image-wrapper">
        {(book.arrayUrlImage[0] && (
          <img
            className="item-list-books__image"
            src={getUrlImage(SIZE_IMAGE_MEDIUM, book.arrayUrlImage[0])}
            alt="book.arrayUrlImage[0]"
          />
        )) ||
          imageNotFound()}
      </div>
      <div className="item-list-books__title">{checkAndTrimString(book.title)}</div>
      <div className="item-list-books__author">
        {book.authorsName[0] ? <span> by {book.authorsName[0]}</span> : null}
      </div>
    </div>
  );
}

ItemListBooks.propTypes = {
  className: PropTypes.string.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    arrayUrlImage: PropTypes.array.isRequired,
  }).isRequired,
};
