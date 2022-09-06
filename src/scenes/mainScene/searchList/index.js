import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

export default function SearchList({ className = '' }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function get() {
      let params = {
        query: searchParams.get('query'),
        title: searchParams.get('title'),
        author: searchParams.get('author'),
        subject: searchParams.get('subject'),
        place: searchParams.get('place'),
        person: searchParams.get('person'),
        language: searchParams.get('language'),
      };
      console.log(params);
    }
    get();
  }, [searchParams]);

  return <div className={`${className}`}>SearchList</div>;
}

SearchList.propTypes = {
  className: PropTypes.string,
};

SearchList.defaultProps = {
  className: null,
};
