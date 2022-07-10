import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getBookByWorks } from '../../../util/axios/getBooks';

import './book.scss';

export default function Book({ className = '' }) {
  const { worksId } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function get() {
      const data = await getBookByWorks(worksId);
      console.log(data);
      setBook(data);
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
