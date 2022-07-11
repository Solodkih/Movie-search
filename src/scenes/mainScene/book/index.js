import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getBookByWorks, getNameAuthorForBook } from '../../../util/axios/getBooks';
import urlImageNotFound from '../../../icon/sad.png';

import './book.scss';

export default function Book({ className = '' }) {
  const { worksId } = useParams();
  const [book, setBook] = useState({
    book: { arrayUrlImage: [urlImageNotFound] },
    authors: [],
  });

  useEffect(() => {
    async function get() {
      const book = await getBookByWorks(worksId);
      const authors = await Promise.all(
        book.authors.map(async (authorName) => {
          return await getNameAuthorForBook(authorName);
        })
      );
      setBook({
        book,
        authors,
      });
    }
    get();
  }, []);
  return (
    <div className={`${className} book`}>
      <div className="book__container">
        <div className="book__image-block">
          <img className="book__image" src={book.book.arrayUrlImage[0]} alt="Omg" />
        </div>
        <div className="book__aboutBook">
          <div className="book-aboutBook__authors">
            {book.authors.map((name, number) => {
              return (
                <p className="book-aboutBook__item-author" key={`${number}_${name}`}>
                  {name}
                </p>
              );
            })}
          </div>
          <div className="book-aboutBook__first-publish-date">{`First publish date: ${book.book.firstPublishDate}.`}</div>
          <div className="book-aboutBook__title">{book.book.title}</div>
          <div className="book-aboutBook__description">
            <p>{book.book.description}</p>
          </div>
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
