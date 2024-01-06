import { workFromGetWorkObjects } from '../workFromObjectAJAX';

const urlMain = new URL('https://openlibrary.org');

export async function getBookByWorks(urlWorks) {
  try {
    const newUrl = new URL(`/works/${urlWorks}.json`, urlMain);
    const responseBook = await fetch(newUrl, { method: 'get' });
    if (!responseBook.ok) return Promise.reject(responseBook);
    const book = await responseBook.json();
    return workFromGetWorkObjects(book);
  } catch (e) {
    return Promise.reject(e);
  }
}
