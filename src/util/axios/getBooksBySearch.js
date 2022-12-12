import axios from 'axios';
import stringWithSpaceToStringWithPlus from '../changeString';

const URL_MAIN = 'https://openlibrary.org';

export default async function getBooksBySearch(
  { query, title, author, subject, place, person, language, publisher },
  page
) {
  const strQuery = query ? `q=${stringWithSpaceToStringWithPlus(query)}` : '';
  const strTitle = title ? `&title=${stringWithSpaceToStringWithPlus(title)}` : '';
  const strAuthor = author
    ? `&author=${stringWithSpaceToStringWithPlus(author)}`
    : '';
  const strSubject = subject
    ? `&subject=${stringWithSpaceToStringWithPlus(subject)}`
    : '';
  const strPlace = place ? `&place=${stringWithSpaceToStringWithPlus(place)}` : '';
  const strPerson = person
    ? `&person=${stringWithSpaceToStringWithPlus(person)}`
    : '';
  const strLanguage = language
    ? `&language=${stringWithSpaceToStringWithPlus(language)}`
    : '';
  const strPublisher = publisher
    ? `&publisher=${stringWithSpaceToStringWithPlus(publisher)}`
    : '';

  const responseBooks = await axios({
    method: 'get',
    url: `${URL_MAIN}/search.json?${strQuery}${strTitle}${strAuthor}${strSubject}${strPlace}${strPerson}${strLanguage}${strPublisher}&page=${page}`,
  });
  const arrayBooks = responseBooks.data.docs.map((item) => {
    return {
      title: item.title,
      urlBookByWork: item.key,
      authors: item.author_name
        ? item.author_name.map((itemAuthors) => {
            return itemAuthors;
          })
        : [''],
      urlImage:
        item.cover_i && `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`,
    };
  });
  return arrayBooks;
}
