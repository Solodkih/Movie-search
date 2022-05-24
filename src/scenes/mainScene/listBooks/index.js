import React, { useEffect } from 'react';
import { getBooks } from '../../../requestData/axios/getBooks';
import './listBooks.scss';

export default function ListBooks() {
  let response = null;

  useEffect(() => {
    async function get() {
      response = await getBooks();
    }
    get();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books__container">
        <div className="list-books__item item-list-books">Books 1</div>
        <div className="list-books__item item-list-books">Books 2</div>
        <div className="list-books__item item-list-books">Books 3</div>
        <div className="list-books__item item-list-books">Books 4</div>
        <div className="list-books__item item-list-books">Books 5</div>
        <div className="list-books__item item-list-books">Books 6</div>
      </div>
    </div>
  );
}
