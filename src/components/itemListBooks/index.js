import React from 'react';
import PropTypes from 'prop-types';
import urlImageNotFound from '../../icon/sad.png';

import './itemListBooks.scss';

export default function ItemListBooks({
  className,
  book = { title: 'Not found', urlImage: urlImageNotFound },
}) {
  return (
    <div className={`${className} item-list-books`}>
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
