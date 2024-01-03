import {
  workFromGetWorkObjects,
} from '../workFromObjectAJAX';

const urlMain = new URL('https://openlibrary.org');

export async function getBookByWorks(urlWorks) {
  const newUrl = new URL(`/works/${urlWorks}.json`, urlMain);
  const responseBook = await fetch(newUrl, { method: 'get' });
  const book = await responseBook.json();
  return workFromGetWorkObjects(book);
}
