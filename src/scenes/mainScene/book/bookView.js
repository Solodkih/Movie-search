import React from 'react';

import ImageNotFound from '../../../components/imageNotFound';
import { SmallLoader } from '../../../components/loader';

import './book.scss';

export default function bookView({
  urlImage,
  book,
  authors,
  handleOnClickAuthor,
  className = '',
  download,
  handlerShowImage,
}) {
  return (
    <div className={`${className} book book__container`}>
      <div className="book__main-block">
        <div
          role="link"
          tabIndex="0"
          className="book__image-block"
          onClick={handlerShowImage}
        >
          {!urlImage && <ImageNotFound />}
          {urlImage && (
            <img className="book__image" src={urlImage} alt={book.title} />
          )}
        </div>
        <div className="book-aboutBook">
          <div className="book-aboutBook__title">
            <span>{book.title}</span>
          </div>
          <div className="book-aboutBook__first-publish-date">
            <div className="book-aboutBook__first-publish-date-title">
              <span>First publish date:</span>
            </div>
            <div className="book-aboutBook__first-publish-date-data">
              <span>{`${
                book.firstPublishDate ? book.firstPublishDate : 'unknown'
              }.`}</span>
            </div>
          </div>
          <div className="book-aboutBook__authors">
            <div className="book-aboutBook__authors-title">
              <span>Authors:</span>
            </div>
            <ul className="book-aboutBook__authors-list">
              {authors.map(({ name, key }) => {
                return (
                  <li className="book-aboutBook__authors-item" key={key}>
                    <div
                      role="link"
                      onClick={(event) => handleOnClickAuthor(event, key)}
                      tabIndex="0"
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
        {!download && <div className="book-description">{book.description}</div>}
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">
          <span>Subjects:</span>
        </div>
        <div className="book-aboutBook__subject-list">
          {book.subjects.map((item, i, { length }) => {
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
          {book.subjectPeople.map((item, i, { length }) => {
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
          {book.subjectPlaces.map((item, i, { length }) => {
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
            {book.subjectTimes.map((item, i, { length }) => {
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
