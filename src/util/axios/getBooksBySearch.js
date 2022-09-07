import axios from 'axios';

const URL_MAIN = 'https://openlibrary.org';

export async function getBooksBySearch({
  query,
  title,
  author,
  subject,
  place,
  person,
  language,
}) {
  const strTitle = title ? `title=${title}` : null;
  const strAuthor = author ? `author=${author}` : null;
  const responseBooks = await axios({
    method: 'get',
    url: `${URL_MAIN}/search.json?${strTitle}&${strAuthor}&limit=10`,
  });

  const arrayBooks = responseBooks.data.docs.map((item) => {
    return {
      title: item.title,
      urlBookByWork: item.key,
      authors: item.author_name.map((itemAuthors) => {
        return itemAuthors;
      }),
      urlImage: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`,
    };
  });
  return arrayBooks;
}
