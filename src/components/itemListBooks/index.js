import React from 'react';
import { SIZE_IMAGE_MEDIUM, getUrlImage } from '../../util/image';
import urlImageNotFound from '../../icon/sad.png';
import './itemListBooks.scss';

export default function ItemListBooks({ className, book = { title: 'undefined' } }) {
  let imageSrc;

  if (book.images === undefined || book === null || book.images === undefined) {
    imageSrc = urlImageNotFound;
  } else {
    imageSrc = getUrlImage({ size: SIZE_IMAGE_MEDIUM, number: book.images[0] });
  }

  return (
    <div className={`${className} item-list-books`}>
      <img className="item-list-books__image" src={imageSrc} alt="Omg" />
      <div className="item-list-books__title">{book.title}</div>
    </div>
  );
}
