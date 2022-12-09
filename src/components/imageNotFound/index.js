import React from 'react';

import './imageNotFound.scss';

export default function ImageNotFound({ className }) {
  return (
    <div className={`${className} image-not-found`}>
      Sorry, we didn't find the picture.
      <br />
      <br /> We will try to fix it soon
    </div>
  );
}
