import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './itemListBooks.scss';

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
    navigate(`/book${book.urlBookByWork}`);
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
        {(book.urlImage && (
          <img className="item-list-books__image" src={book.urlImage} alt="Omg" />
        )) ||
          imageNotFound()}
      </div>
      <div className="item-list-books__title">{checkAndTrimString(book.title)}</div>
      <div className="item-list-books__author">
        {book.authors[0] ? <span> by {book.authors[0]}</span> : null}
      </div>
    </div>
  );
}

ItemListBooks.propTypes = {
  className: PropTypes.string.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};
