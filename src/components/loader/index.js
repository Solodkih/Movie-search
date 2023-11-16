import React from 'react';

import './loader.scss';

export function BigLoader() {
  return (
    <div className="loader__wrapper">
      <div className="loader__background" />
      <div className="loader__animation" />
    </div>
  );
}

export function SmallLoader() {
  return <div className="loader__small-animation" />;
}
