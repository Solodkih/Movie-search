import React from 'react';
import Search from '../../../components/search';

export default function SubjectSeach({ subjectData, setSubject }) {
  return (
    <>
      <div className="menu-side-bar__buttons">
        <button
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
          placeholder="e.g Pinocchio"
          value={subjectData.subject}
          handleChange={(event) => {
            setSubject (event.target.value, subjectData.show);
          }}
        />
      )}
    </>
  );
}
