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
  publisher,
}) {
  const strQuery = query ? `q=${query}` : '';
  const strTitle = title ? `&title=${title}` : '';
  const strAuthor = author ? `&author=${author}` : '';
  const strSubject = subject ? `&subject=${subject}` : '';
  const strPlace = place ? `&place=${place}` : '';
  const strPerson = person ? `&person=${person}` : '';
  const strLanguage = language ? `&language=${language}` : '';
  const strPublisher = publisher ? `&publisher=${publisher}` : '';

  const responseBooks = await axios({
    method: 'get',
    url: `${URL_MAIN}/search.json?${strQuery}${strTitle}${strAuthor}${strSubject}${strPlace}${strPerson}${strLanguage}${strPublisher}&limit=10`,
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
  console.log(responseBooks);
  return arrayBooks;
}
