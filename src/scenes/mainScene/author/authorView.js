import React from 'react';
import PropTypes from 'prop-types';
import ErrorFetch from '../../../components/errors/errorFetch';

import {
  STATUS_AUTHOR_DOWLOAD_ERROR,
  STATUS_AUTHOR_DOWLOAD_PENDING,
} from '../../../redux/authorSlice';

import { SmallLoader } from '../../../components/loader';
import ImageNotFound from '../../../components/imageNotFound';

import './author.scss';

export default function AuthorView({
  urlImage,
  author,
  download,
  handlerShowImage,
  className = '',
}) {
  if (download === STATUS_AUTHOR_DOWLOAD_ERROR) {
    return <ErrorFetch />;
  }

  return (
    <div className={`${className} author author__container`}>
      <div className="author-main-block">
        <div
          role="link"
          tabIndex="0"
          className="author-main-block__image-block"
          onClick={urlImage ? handlerShowImage : null}
        >
          {urlImage ? (
            <img
              className="author-main-block__image"
              src={urlImage}
              alt={author.name}
            />
          ) : (
            <ImageNotFound />
          )}
        </div>

        <div className="author-main-block__name">
          <span>{author.name}</span>
        </div>
        <div className="author-main-block__category">
          <div className="author-main-block__category-title">
            <span>Personal name:</span>
          </div>
          <div className="author-main-block__category-data">
            {author.personalName ? author.personalName : 'unknown'}
          </div>
        </div>
        <div className="author-main-block__category">
          <div className="author-main-block__category-title">
            <span>Birth date:</span>
          </div>
          <div className="author-main-block__category-data">
            {author.birthDate ? author.birthDate : 'unknown'}
          </div>
        </div>
        <div className="author-main-block__category">
          <div className="author-main-block__category-title">
            <span>Death date:</span>
          </div>
          <div className="author-main-block__category-data">
            {author.deathDate ? author.deathDate : 'unknown'}
          </div>
        </div>
        {download === STATUS_AUTHOR_DOWLOAD_PENDING && <SmallLoader />}
        {download !== STATUS_AUTHOR_DOWLOAD_PENDING && (
          <div className="author-main-block__bio">{author.bio}</div>
        )}
      </div>
      <div className="author__category">
        <div className="author__category-title">
          <span>Alternate names:</span>
        </div>
        <div className="author__category-list">
          {author.alternateNames &&
            author.alternateNames.map((item, i, { length }) => {
              if (i + 1 === length) {
                return <span key={`${item}`}>{item.concat('.')}</span>;
              }
              return <span key={`${item}`}>{item.concat(', ')}</span>;
            })}
        </div>
      </div>
    </div>
  );
}

AuthorView.propTypes = {
  className: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    personalName: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    deathDate: PropTypes.string.isRequired,
    alternateNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  download: PropTypes.bool.isRequired,
  handlerShowImage: PropTypes.func.isRequired,
};
