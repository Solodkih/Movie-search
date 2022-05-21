import React from 'react';
import './search.scss';
import imgSeach from '../../../../icon/Search.png';
import imgFilter from '../../../../icon/Filter.png';

export default function Seach() {
  return (
    <div className="seach">
      <input
        className="seach__button-seach"
        type="image"
        src={imgSeach}
        name="submit"
        alt="отправить"
      />
      <input className="seach__input" type="text" placeholder="Seach" />
      <input
        className="seach__button-filter"
        type="image"
        src={imgFilter}
        name="submit"
        alt="отправить"
      />
    </div>
  );
}
