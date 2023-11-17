import React from 'react';

import { SmallLoader } from '../../../components/loader';
import ImageNotFound from '../../../components/imageNotFound';

import './author.scss';

export default function AuthorView({ author, download, className = '' }) {
  return (
    <div className={`${className} author author__container`}>
      <div className="author-main-block">
        <div className="author-main-block__image-block">
          {author.photos.length !== 0 ? (
            <img
              className="author-main-block__image"
              src={author.photos[0]}
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
        {download && <SmallLoader />}
        {!download && <div className="author-main-block__bio">{author.bio}</div>}
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
