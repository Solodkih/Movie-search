import axios from 'axios';

const urlMain = 'https://openlibrary.org';

const urlBook = '/subjects/love.json';

const reguestDataGetBook = {
  method: 'get',
  url: `${urlMain}${urlBook}`,
};

export default async function getBookSubjects() {
  const responseBook = await axios(reguestDataGetBook);
  const arrayBooks = responseBook.data.works.map((item) => {
    return {
      title: item.title,
      authors: item.authors.map((itemAuthors) => {
        return itemAuthors.name;
      }),
      urlImage: `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`,
    };
  });
  return arrayBooks;
}
