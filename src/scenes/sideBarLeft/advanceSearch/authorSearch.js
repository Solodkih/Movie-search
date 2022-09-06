import React from 'react';
import Search from '../../../components/search';

export default function AuthorSearch({ authorData, setAuthor }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
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
