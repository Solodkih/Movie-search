import React, { useEffect, useState } from 'react';
import { getBook } from '../../../requestData/axios/getBooks';
import './listBooks.scss';
import ItemListBooks from '../../../components/itemListBooks';

export default function ListBooks() {
  const [book, setBooks] = useState();

  useEffect(() => {
    async function get() {
      let data = await getBook();
      setBooks(data);
    }
    get();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books__container">
        <ItemListBooks className="list-books__item" book={book} />
        <ItemListBooks className="list-books__item" book={book} />
        <ItemListBooks className="list-books__item" book={book} />
        <ItemListBooks className="list-books__item" book={book} />
        <ItemListBooks className="list-books__item" book={book} />
        <ItemListBooks className="list-books__item" book={book} />
      </div>
    </div>
  );
}
