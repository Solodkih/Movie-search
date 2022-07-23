import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookByWorks, getNameAuthorForBook } from '../../../util/axios/getBooks';
import urlImageNotFound from '../../../icon/sad.png';

import './book.scss';

export default function Book({ className = '' }) {
  const { worksId } = useParams();
  const [book, setBook] = useState({
    bookData: {
      arrayUrlImage: [urlImageNotFound],
      subjects: [],
      subjectPlaces: [],
      subjectPeople: [],
      subjectTimes: [],
    },
    authors: [],
  });
  const navigate = useNavigate();

  function handleOnClickAuthor(event, authorURL) {
    event.preventDefault();
    navigate(`${authorURL}`);
  }

  useEffect(() => {
    async function get() {
      const bookData = await getBookByWorks(worksId);
      const authors = await Promise.all(
        bookData.authors.map(async (authorURL) => {
          const name = await getNameAuthorForBook(authorURL);
          return { authorURL, name };
        })
      );
      setBook({
        bookData,
        authors,
      });
    }
    get();
  }, []);
  return (
    <div className={`${className} book book__container`}>
      <div className="book__main-block">
        <div className="book__image-block">
          <img
            className="book__image"
            src={book.bookData.arrayUrlImage[0]}
            alt={book.bookData.title}
          />
        </div>
        <div className="book-aboutBook">
          <div className="book-aboutBook__title">{book.bookData.title}</div>
          <div className="book-aboutBook__first-publish-date">
            <div className="book-aboutBook__first-publish-date-title">
              First publish date:
            </div>
            <div className="book-aboutBook__first-publish-date-data">{`${
              book.bookData.firstPublishDate
                ? book.bookData.firstPublishDate
                : 'unknown'
            }.`}</div>
          </div>
          <div className="book-aboutBook__authors">
            <div className="book-aboutBook__authors-title">Authors:</div>
            <ul className="book-aboutBook__authors-list">
              {book.authors.map(({ name, authorURL }) => {
                return (
                  <li
                    onClick={(event) => handleOnClickAuthor(event, authorURL)}
                    className="book-aboutBook__authors-item"
                    key={`${authorURL}`}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="book-description">{book.bookData.description}</div>
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">Subjects:</div>
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
        <div className="book-aboutBook__subject-title">Subject people:</div>
        <div className="book-aboutBook__subject-list">
          {book.bookData.subjectPeople.map((item, i, { length }) => {
            if (i + 1 === length) {
              return (
                <span className="book-aboutBook__subject-item" key={`${item}`}>
                  {item}.
                </span>
              );
            }
            return (
              <span className="book-aboutBook__subject-item" key={`${item}`}>
                {item},
              </span>
            );
          })}
        </div>
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">Subject places:</div>
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
                {item},
              </span>
            );
          })}
        </div>
      </div>
      <div className="book-aboutBook__subject">
        <div className="book-aboutBook__subject-title">Subject times:</div>
        <div className="book-aboutBook__subject-list">
          <p>
            {book.bookData.subjectTimes.map((item, i, { length }) => {
              if (i + 1 === length) {
                return (
                  <span className="book-aboutBook__subject-item" key={`${item}`}>
                    {item}.
                  </span>
                );
              }
              return (
                <span className="book-aboutBook__subject-item" key={`${item}`}>
                  {item},
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  className: PropTypes.string,
};

Book.defaultProps = {
  className: '',
};
