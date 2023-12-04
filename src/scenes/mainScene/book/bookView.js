import React from 'react';

import ImageNotFound from '../../../components/imageNotFound';
import { SmallLoader } from '../../../components/loader';
import { getUrlImage, SIZE_IMAGE_LARGE } from '../../../util/image';

import './book.scss';

export default function bookView({
  book,
  handleOnClickAuthor,
  className = '',
  download,
  handlerShowImage,
}) {
  return (
    <div className={`${className} book book__container`}>
      <div className="book__main-block">
        <div className="book__image-block" onClick={handlerShowImage}>
          {book.bookData.arrayUrlImage.length !== 0 || <ImageNotFound />}
          {book.bookData.arrayUrlImage.length === 0 || (
            <img
              className="book__image"
              src={getUrlImage(SIZE_IMAGE_LARGE, book.bookData.arrayUrlImage[0])}
              alt={book.bookData.title}
            />
          )}
        </div>
        <div className="book-aboutBook">
          <div className="book-aboutBook__title">
            <span>{book.bookData.title}</span>
          </div>
          <div className="book-aboutBook__first-publish-date">
            <div className="book-aboutBook__first-publish-date-title">
              <span>First publish date:</span>
            </div>
            <div className="book-aboutBook__first-publish-date-data">
              <span>{`${
                book.bookData.firstPublishDate
                  ? book.bookData.firstPublishDate
                  : 'unknown'
              }.`}</span>
            </div>
          </div>
          <div className="book-aboutBook__authors">
            <div className="book-aboutBook__authors-title">
              <span>Authors:</span>
            </div>
            <ul className="book-aboutBook__authors-list">
              {book.authors.map(({ name, key }, i) => {
                return (
                  <li className="book-aboutBook__authors-item" key={key}>
                    <div
                      role="button"
                      onClick={(event) => handleOnClickAuthor(event, key)}
                      tabIndex={i}
                    >
                      <span>{name}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {download && <SmallLoader />}
        {!download && (
          <div className="book-description">{book.bookData.description}</div>
        )}
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">
          <span>Subjects:</span>
        </div>
        <div className="book-aboutBook__subject-list">
          {book.bookData.subjects.map((item, i, { length }) => {
            if (i + 1 === length) {
              return (
                <span className="book-aboutBook__subject-item" key={`${item}`}>
                  {item.concat('.')}
                </span>
              );
            }
            return (
              <span className="book-aboutBook__subject-item" key={`${item}`}>
                {item.concat(', ')}
              </span>
            );
          })}
        </div>
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">
          <span>Subject people:</span>
        </div>
        <div className="book-aboutBook__subject-list">
          {book.bookData.subjectPeople.map((item, i, { length }) => {
            if (i + 1 === length) {
              return (
                <span className="book-aboutBook__subject-item" key={`${item}`}>
                  {item.concat('.')}
                </span>
              );
            }
            return (
              <span className="book-aboutBook__subject-item" key={`${item}`}>
                {item.concat(', ')}
              </span>
            );
          })}
        </div>
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">
          <span>Subject places:</span>
        </div>
        <div className="book-aboutBook__subject-list">
          {book.bookData.subjectPlaces.map((item, i, { length }) => {
            if (i + 1 === length) {
              return (
                <span className="book-aboutBook__subject-item" key={`${item}`}>
                  {item.concat('.')}
                </span>
              );
            }
            return (
              <span className="book-aboutBook__subject-item" key={`${item}`}>
                {item.concat(', ')}
              </span>
            );
          })}
        </div>
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">
          <span>Subject times:</span>
        </div>
        <div className="book-aboutBook__subject-list">
          <p>
            {book.bookData.subjectTimes.map((item, i, { length }) => {
              if (i + 1 === length) {
                return (
                  <span className="book-aboutBook__subject-item" key={`${item}`}>
                    {item.concat('.')}
                  </span>
                );
              }
              return (
                <span className="book-aboutBook__subject-item" key={`${item}`}>
                  {item.concat(', ')}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
