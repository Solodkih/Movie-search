import {
  workFromGetWorkObjects,
  workFromSubjectObjects,
} from '../workFromObjectAJAX';

const urlMain = new URL('https://openlibrary.org');

export async function getBookSubjects() {
  const newUrl = new URL('/subjects/love.json', urlMain);
  const responseBook = await fetch(newUrl, {
    method: 'GET',
  });

  const books = await responseBook.json();
  const arrayBooks = books.works.map((item) => {
    return workFromSubjectObjects(item); 
  });
  return arrayBooks;
}

export async function getBookByWorks(urlWorks) {
  const newUrl = new URL(`/works/${urlWorks}.json`, urlMain);
  const responseBook = await fetch(newUrl, { method: 'get' });
  const book = await responseBook.json();

  return workFromGetWorkObjects(book);
}
