import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './advanceSearch.scss';
import ItemSeach from './itemSeach';

export default function AdvanceSearch({
  className,
  params,
  handleOnClickReset,
  handleOnClickSetValue,
}) {
  const { title, author, subject, place, person, publisher } = params;

  return (
    <div className={`${className} menu-side-bar`}>
      <div className="menu-side-bar__logo">Advance Search</div>
      <ul className="menu-side-bar__list">
        <li>
          <ItemSeach
            data-name="title"
            placeholder="e.g Pinocchio"
            value={title}
            name="Title"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
        <li>
          <ItemSeach
            data-name="author"
            placeholder="e.g J. K. Rowling"
            value={author}
            name="Author"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
        <li>
          <ItemSeach
            data-name="subject"
            placeholder="e.g love"
            value={subject}
            name="Subject"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
        <li>
          <ItemSeach
            data-name="place"
            placeholder="e.g Moskow"
            value={place}
            name="Place"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
        <li>
          <ItemSeach
            data-name="person"
            placeholder="e.g Hermione"
            value={person}
            name="Person"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
        <li>
          <ItemSeach
            data-name="publisher"
            placeholder="e.g HarperCollins"
            value={publisher}
            name="Publisher"
            handleOnClickReset={handleOnClickReset}
            handleOnClickSetValue={handleOnClickSetValue}
          />
        </li>
      </ul>
    </div>
  );
}

AdvanceSearch.propTypes = {
  className: PropTypes.string,
  params: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    subject: PropTypes.string,
    place: PropTypes.string,
    person: PropTypes.string,
    publisher: PropTypes.string,
  }),
  handleOnClickReset: PropTypes.func.isRequired,
  handleOnClickSetValue: PropTypes.func.isRequired,
};

AdvanceSearch.defaultProps = {
  className: '',
  params: PropTypes.shape({
    title: '',
    author: '',
    subject: '',
    place: '',
    person: '',
    publisher: '',
  }),
};
