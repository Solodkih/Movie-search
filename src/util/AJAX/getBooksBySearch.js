import stringWithSpaceToStringWithPlus from '../changeString';

export default async function getBooksBySearch(
  { query, title, author, subject, place, person, language, publisher },
  page
) {
  const url = new URL('https://openlibrary.org/search.json');
  query && url.searchParams.set('q', stringWithSpaceToStringWithPlus(query));
  title && url.searchParams.set('title', stringWithSpaceToStringWithPlus(title));
  author && url.searchParams.set('author', stringWithSpaceToStringWithPlus(author));
  subject &&
    url.searchParams.set('subject', stringWithSpaceToStringWithPlus(subject));
  place && url.searchParams.set('place', stringWithSpaceToStringWithPlus(place));
  person && url.searchParams.set('person', stringWithSpaceToStringWithPlus(person));
  language &&
    url.searchParams.set('language', stringWithSpaceToStringWithPlus(language));
  publisher &&
    url.searchParams.set('publisher', stringWithSpaceToStringWithPlus(publisher));
  url.searchParams.set('page', page);

  const response = await fetch(url, {
    method: 'GET',
  });

  const works = await response.json();
  const arrayWorks = works.docs.map((item) => {
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
  return arrayWorks;
}
