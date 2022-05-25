import React from 'react';
import {SIZE_IMAGE_MEDIUM, GetUrlImage, SIZE_IMAGE_LARGE} from '../../util/image'
import './itemListBooks.scss';

export default function ItemListBooks({ className, data }) {
  let image
  
  if (data.image === undefined) {
      
  }

  return (
    <div className={`${className} item-list-books`}>
      <img className="item-list-books__image" src={GetUrlImage(SIZE_IMAGE_LARGE, image )} alt="Omg" />
      <div className="item-list-books__title">Title</div>
      <div className="item-list-books__authors">Authors</div>
    </div>
  );
}
