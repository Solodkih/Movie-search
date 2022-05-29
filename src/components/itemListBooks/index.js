import React from 'react';
import { SIZE_IMAGE_MEDIUM, getUrlImage } from '../../util/image';
import urlImageNotFound from '../../icon/sad.png';
import './itemListBooks.scss';

export default function ItemListBooks({
  className,
  book = { title: 'Not found', urlImage: urlImageNotFound },
}) {
  console.log(book);
  return (
    <div className={`${className} item-list-books`}>
      <img className="item-list-books__image" src={book.urlImage} alt="Omg" />
      <div className="item-list-books__title">{book.title}</div>
      <div className="item-list-books__description">
        <div className="item-list-books__date-puba">{book.authors[0]}</div>
        <div className="item-list-books__author">{book.authors[0]}</div>
        <div className="item-list-books__author">{book.authors[1]}</div>
      </div>
    </div>
  );
}
