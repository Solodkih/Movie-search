import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import urlImageNotFound from '../../icon/sad.png';

import './itemListBooks.scss';

export default function ItemListBooks({
  className,
  book = { title: 'Not found', urlImage: urlImageNotFound },
}) {
  const navigate = useNavigate();

  function handleOnClick(event) {
    event.preventDefault();
    navigate(`/book${book.urlBookByWork}`);
  }

  return (
    <div
      role="presentation"
      className={`${className} item-list-books`}
      onClick={(event) => handleOnClick(event)}
    >
      <img className="item-list-books__image" src={book.urlImage} alt="Omg" />
      <div className="item-list-books__title">{book.title}</div>
      <div className="item-list-books__author"> by {book.authors[0]}</div>
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
