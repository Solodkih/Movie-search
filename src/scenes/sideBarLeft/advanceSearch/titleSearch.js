import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function TitleSeach({ titleData, setTitle }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
          type="button"
          className="menu-side-bar__button-title"
          onClick={(e) => {
            e.preventDefault();
            setTitle(titleData.title, !titleData.show);
          }}
        >
          Title
        </button>
        {titleData.show && (
          <button
            type="button"
            className="menu-side-bar__button-clear"
            onClick={(e) => {
              e.preventDefault();
              setTitle('', titleData.show);
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      {titleData.show && (
        <Search
          placeholder="e.g Pinocchio"
          value={titleData.title}
          handleChange={(event) => {
            setTitle(event.target.value, titleData.show);
          }}
        />
      )}
    </>
  );
}

TitleSeach.propTypes = {
  titleData: PropTypes.shape({
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setTitle: PropTypes.func,
};

TitleSeach.defaultProps = {
  titleData: PropTypes.shape({
    title: '',
    show: false,
  }),
  setTitle: () => {},
};
