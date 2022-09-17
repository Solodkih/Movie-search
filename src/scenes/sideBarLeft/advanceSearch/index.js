import React from 'react';
import PropTypes from 'prop-types';
import './advanceSearch.scss';
import TitleSeach from './titleSearch';
import AuthorSearch from './authorSearch';
import SubjectSearch from './subjectSearch';
import PlaceSearch from './placeSearch';
import PersonSearch from './personSearch';
import PublisherSearch from './publisherSearch';

export default function AdvanceSearch({
  className,
  titleData,
  setTitle,
  authorData,
  setAuthor,
  subjectData,
  setSubject,
  placeData,
  setPlace,
  personData,
  setPerson,
  publisherData,
  setPublisher,
}) {
  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Advance Search</div>
      <ul className="menu-side-bar__list">
        <li>
          <TitleSeach
            titleData={titleData}
            setTitle={(title, show) => {
              setTitle(title, show);
            }}
          />
        </li>
        <li>
          <AuthorSearch
            authorData={authorData}
            setAuthor={(author, show) => {
              setAuthor(author, show);
            }}
          />
        </li>
        <li>
          <SubjectSearch
            subjectData={subjectData}
            setSubject={(subject, show) => {
              setSubject(subject, show);
            }}
          />
        </li>
        <li>
          <PlaceSearch
            placeData={placeData}
            setPlace={(place, show) => {
              setPlace(place, show);
            }}
          />
        </li>
        <li>
          <PersonSearch
            personData={personData}
            setPerson={(person, show) => {
              setPerson(person, show);
            }}
          />
        </li>
        <li>
          <PublisherSearch
            publisherData={publisherData}
            setPublisher={(publisher, show) => {
              setPublisher(publisher, show);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

AdvanceSearch.propTypes = {
  className: PropTypes.string,
  titleData: PropTypes.shape({
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  authorData: PropTypes.shape({
    author: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),

  subjectData: PropTypes.shape({
    subject: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  placeData: PropTypes.shape({
    place: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  personData: PropTypes.shape({
    person: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  publisherData: PropTypes.shape({
    publisher: PropTypes.string,
    show: PropTypes.bool.isRequired,
  }),
  setTitle: PropTypes.func,
  setAuthor: PropTypes.func,
  setSubject: PropTypes.func,
  setPlace: PropTypes.func,
  setPerson: PropTypes.func,
  setPublisher: PropTypes.func,
};

AdvanceSearch.defaultProps = {
  className: '',
  titleData: PropTypes.shape({
    title: '',
    show: false,
  }),
  authorData: PropTypes.shape({
    author: '',
    show: false,
  }),

  subjectData: PropTypes.shape({
    subject: '',
    show: false,
  }),
  placeData: PropTypes.shape({
    place: '',
    show: false,
  }),
  personData: PropTypes.shape({
    person: '',
    show: false,
  }),
  publisherData: PropTypes.shape({
    publisher: '',
    show: false,
  }),
  setTitle: () => {},
  setAuthor: () => {},
  setSubject: () => {},
  setPlace: () => {},
  setPerson: () => {},
  setPublisher: () => {},
};
