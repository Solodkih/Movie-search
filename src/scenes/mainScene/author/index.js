import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getAuthor } from '../../../util/axios/getBooks';

export default function Author({ className = '' }) {
  const { authorId } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    async function get() {
      const authorData = await getAuthor(`/authors/${authorId}`);
      console.log(authorData);
      setAuthor(authorData);
    }
    get();
  }, []);

  return <div className={`${className}`}>Author</div>;
}

Author.propTypes = {
  className: PropTypes.string,
};

Author.defaultProps = {
  className: null,
};
