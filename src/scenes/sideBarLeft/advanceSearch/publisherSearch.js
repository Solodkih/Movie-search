import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function PublisherSearch({ publisherData, setPublisher }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
          type="button"
          className="menu-side-bar__button-title"
          onClick={(e) => {
            e.preventDefault();
            setPublisher(publisherData.publisher, !publisherData.show);
          }}
        >
          Publisher
        </button>
        {publisherData.show && (
          <button
            type="button"
            className="menu-side-bar__button-clear"
            onClick={(e) => {
              e.preventDefault();
              setPublisher('', publisherData.show);
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      {publisherData.show && (
        <Search
          placeholder="e.g HarperCollins"
          value={publisherData.publisher}
          handleChange={(event) => {
            setPublisher(event.target.value, publisherData.show);
          }}
        />
      )}
    </>
  );
}

PublisherSearch.propTypes = {
  publisherData: PropTypes.shape({
    publisher: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setPublisher: PropTypes.func,
};

PublisherSearch.defaultProps = {
  publisherData: PropTypes.shape({
    publisher: '',
    show: false,
  }),
  setPublisher: () => {},
};
