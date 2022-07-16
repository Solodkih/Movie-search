import axios from 'axios';

const urlMain = 'https://openlibrary.org';

const urlBook = '/subjects/love.json';

const reguestDataGetBook = {
  method: 'get',
  url: `${urlMain}${urlBook}`,
};

export async function getBookSubjects() {
  const responseBook = await axios(reguestDataGetBook);
  const arrayBooks = responseBook.data.works.map((item) => {
    return {
      title: item.title,
      urlBookByWork: item.key,
      authors: item.authors.map((itemAuthors) => {
        return itemAuthors.name;
      }),
      urlImage: `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`,
    };
  });
  return arrayBooks;
}

export async function getBookByWorks(urlWorks) {
  const responseBook = await axios({
    method: 'get',
    url: `${urlMain}/works/${urlWorks}.json`,
  });
  console.log(responseBook);
  return {
    title: responseBook.data.title,
    firstPublishDate: responseBook.data.first_publish_date,
    authors: responseBook.data.authors.map((itemAuthors) => {
      return itemAuthors.author.key;
    }),
    description: responseBook.data.description.value
      ? responseBook.data.description.value
      : responseBook.data.description,
    arrayUrlImage: responseBook.data.covers.map((itemUrl) => {
      return `https://covers.openlibrary.org/b/id/${itemUrl}-L.jpg`;
    }),
  };
}

export async function getNameAuthorForBook(urlAuthor) {
  const responseAuthor = await axios({
    method: 'get',
    url: `${urlMain}${urlAuthor}.json`,
  });
  return responseAuthor.data.alternate_names[0];
}
