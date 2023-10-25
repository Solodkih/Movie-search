const urlMain = new URL('https://openlibrary.org');

export async function getBookSubjects() {
  const newUrl = new URL('/subjects/love.json', urlMain);
  const responseBook = await fetch(newUrl, {
    method: 'GET',
  });

  const books = await responseBook.json();
  const arrayBooks = books.works.map((item) => {
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
  const newUrl = new URL(`/works/${urlWorks}.json`, urlMain);
  const responseBook = await fetch(newUrl, { method: 'get' });
  const book = await responseBook.json();

  return {
    subjectTimes: book.subject_times ?? [],
    subjectPlaces: book.subject_places ?? [],
    subjectPeople: book.subject_people ?? [],
    subjects: book.subjects ?? [],
    title: book.title,
    firstPublishDate: book.first_publish_date,
    authors: book.authors.map((itemAuthors) => {
      return itemAuthors.author.key;
    }),
    description: book.description?.value ?? book.description ?? '',
    arrayUrlImage:
      book.covers?.map((itemUrl) => {
        return `https://covers.openlibrary.org/b/id/${itemUrl}-L.jpg`;
      }) ?? [],
  };
}
