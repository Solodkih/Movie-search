import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getBookByWorks, getNameAuthorForBook } from '../../../util/axios/getBooks';

import './book.scss';

export default function Book({ className = '' }) {
  const { worksId } = useParams();
  const [book, setBook] = useState({ book: null, authors: null });

  useEffect(() => {
    async function get() {
      const book = await getBookByWorks(worksId);
      const authors = await Promise.all(
        book.authors.map(async (authorName) => {
          return await getNameAuthorForBook(authorName);
        })
      );
      setBook({ book, authors });
    }
    get();
  }, []);
  return <div className={`${className} book`}>Book</div>;
}

Book.propTypes = {
  className: PropTypes.string,
};

Book.defaultProps = {
  className: '',
};
