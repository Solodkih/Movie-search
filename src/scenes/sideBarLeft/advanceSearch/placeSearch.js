import React from 'react';
import Search from '../../../components/search';

export default function PlaceSearch({ placeData, setPlace }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
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
