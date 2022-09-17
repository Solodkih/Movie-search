import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../../components/search';

export default function SubjectSeach({ subjectData, setSubject }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
          type="button"
          className="menu-side-bar__button-title"
          onClick={(e) => {
            e.preventDefault();
            setSubject(subjectData.subject, !subjectData.show);
          }}
        >
          Subject
        </button>
        {subjectData.show && (
          <button
            type="button"
            className="menu-side-bar__button-clear"
            onClick={(e) => {
              e.preventDefault();
              setSubject('', subjectData.show);
            }}
          >
            CLEAR
          </button>
        )}
      </div>
      {subjectData.show && (
        <Search
          placeholder="e.g love"
          value={subjectData.subject}
          handleChange={(event) => {
            setSubject(event.target.value, subjectData.show);
          }}
        />
      )}
    </>
  );
}

SubjectSeach.propTypes = {
  subjectData: PropTypes.shape({
    subject: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setSubject: PropTypes.func,
};

SubjectSeach.defaultProps = {
  subjectData: PropTypes.shape({
    subject: '',
    show: false,
  }),
  setSubject: () => {},
};
