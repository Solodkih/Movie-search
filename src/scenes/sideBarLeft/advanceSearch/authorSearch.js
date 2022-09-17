import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function AuthorSearch({ authorData, setAuthor }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
          type="button"
          className="menu-side-bar__button-title"
          onClick={(e) => {
            e.preventDefault();
            setAuthor(authorData.author, !authorData.show);
          }}
        >
          Author
        </button>
        {authorData.show && (
          <button
            type="button"
            className="menu-side-bar__button-clear"
            onClick={(e) => {
              e.preventDefault();
              setAuthor('', authorData.show);
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      {authorData.show && (
        <Search
          placeholder="e.g J. K. Rowling"
          value={authorData.author}
          handleChange={(event) => {
            setAuthor(event.target.value, authorData.show);
          }}
        />
      )}
    </>
  );
}

AuthorSearch.propTypes = {
  authorData: PropTypes.shape({
    author: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setAuthor: PropTypes.func,
};

AuthorSearch.defaultProps = {
  authorData: PropTypes.shape({
    author: '',
    show: false,
  }),
  setAuthor: () => {},
};
