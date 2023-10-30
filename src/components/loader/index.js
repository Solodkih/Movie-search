import React from 'react';

import './loader.scss';

export default function Loader() {
  return (
    <div className="loader__wrapper">
      <div className="loader__background"></div>
      <div className="loader__animation"></div>
    </div>
  );
}
