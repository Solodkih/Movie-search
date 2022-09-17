import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function PlaceSearch({ placeData, setPlace }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
          type="button"
          className="menu-side-bar__button-title"
          onClick={(e) => {
            e.preventDefault();
            setPlace(placeData.place, !placeData.show);
          }}
        >
          Place
        </button>
        {placeData.show && (
          <button
            type="button"
            className="menu-side-bar__button-clear"
            onClick={(e) => {
              e.preventDefault();
              setPlace('', placeData.show);
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      {placeData.show && (
        <Search
          placeholder="e.g Moskow"
          value={placeData.place}
          handleChange={(event) => {
            setPlace(event.target.value, placeData.show);
          }}
        />
      )}
    </>
  );
}

PlaceSearch.propTypes = {
  placeData: PropTypes.shape({
    place: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setPlace: PropTypes.func,
};

PlaceSearch.defaultProps = {
  placeData: PropTypes.shape({
    place: '',
    show: false,
  }),
  setPlace: () => {},
};
