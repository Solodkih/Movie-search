import React, { useEffect, useState } from 'react';
import { getBookSubjects } from '../../../util/axios/getBooks';
import './listBooks.scss';
import ItemListBooks from '../../../components/itemListBooks';

export default function ListBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function get() {
      let data = await getBookSubjects();
      setBooks(data);
    }
    get();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books__container">
        {books.map((book) => {
          return (
            <ItemListBooks
              key={`${book.title}+${book.urlImage}`}
              className="list-books__item"
              book={book}
            />
          );
        })}
      </div>
    </div>
  );
}
