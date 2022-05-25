import React, { useEffect } from 'react';
import { getBook } from '../../../requestData/axios/getBooks';
import './listBooks.scss';
import ItemListBooks from '../../../components/itemListBooks';

export default function ListBooks() {
  let book = null;

  useEffect(() => {
    async function get() {
      book = await getBook();
    }
    get();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books__container">
        <ItemListBooks className="list-books__item" />
        <ItemListBooks className="list-books__item" />
        <ItemListBooks className="list-books__item" />
        <ItemListBooks className="list-books__item" />
        <ItemListBooks className="list-books__item" />
        <ItemListBooks className="list-books__item" />
      </div>
    </div>
  );
}
