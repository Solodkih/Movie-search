import React from 'react';
import './errors.scss';

export default function AnswerIsNull() {
  return (
    <div className="error">
      Sorry, but we didn&apos;t find anything matching your request.
      <br /> Try changing your request.
    </div>
  );
}
