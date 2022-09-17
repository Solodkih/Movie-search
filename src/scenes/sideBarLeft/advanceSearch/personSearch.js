import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function PersonSearch({ personData, setPerson }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
          type="button"
          className="menu-side-bar__button-title"
          onClick={(e) => {
            e.preventDefault();
            setPerson(personData.person, !personData.show);
          }}
        >
          Person
        </button>
        {personData.show && (
          <button
            type="button"
            className="menu-side-bar__button-clear"
            onClick={(e) => {
              e.preventDefault();
              setPerson('', personData.show);
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      {personData.show && (
        <Search
          placeholder="e.g Hermione"
          value={personData.person}
          handleChange={(event) => {
            setPerson(event.target.value, personData.show);
          }}
        />
      )}
    </>
  );
}

PersonSearch.propTypes = {
  personData: PropTypes.shape({
    person: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setPerson: PropTypes.func,
};

PersonSearch.defaultProps = {
  personData: PropTypes.shape({
    person: '',
    show: false,
  }),
  setPerson: () => {},
};
