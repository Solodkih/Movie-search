import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getBookByWorks, getNameAuthorForBook } from '../../../util/axios/getBooks';
import urlImageNotFound from '../../../icon/sad.png';

import './book.scss';

export default function Book({ className = '' }) {
  const { worksId } = useParams();
  const [book, setBook] = useState({
    bookData: { arrayUrlImage: [urlImageNotFound] },
    authors: [],
  });

  useEffect(() => {
    async function get() {
      const bookData = await getBookByWorks(worksId);
      const authors = await Promise.all(
        bookData.authors.map(async (authorName) => {
          const name = await getNameAuthorForBook(authorName);
          return name;
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
          <div className="book-aboutBook__authors-list">
            {book.authors.map((name) => {
              return (
                <p className="book-aboutBook__authors-item" key={`${name}`}>
                  {name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="book-description">{book.bookData.description}</div>
    </div>
  );
}

Book.propTypes = {
  className: PropTypes.string,
};

Book.defaultProps = {
  className: '',
};
