import { getUrlImage, SIZE_IMAGE_LARGE } from '../image';

const urlMain = new URL('https://openlibrary.org');

export async function getNameAuthorForBook(urlAuthor) {
  const newUrl = new URL(`${urlAuthor}.json`, urlMain);
  const responseAuthor = await fetch(newUrl, {
    method: 'GET',
  });
  const author = await responseAuthor.json();
  return author.name;
}

export async function getAuthor(urlAuthor) {
  const newUrl = new URL(`${urlAuthor}.json`, urlMain);
  const responseAuthor = await fetch(newUrl, {
    method: 'get',
  });
  const author = await responseAuthor.json();
  return {
    key: author.key,
    alternateNames: author.alternate_names,
    bio: (() => {
      if (author.bio) {
        if (author.bio.value) {
          return author.bio.value;
        }
        return author.bio;
      }
      return null;
    })(),
    birthDate: author.birth_date,
    deathDate: author.death_date,
    name: author.name,
    personalName: author.personal_name,
    title: author.title,
    photos: author.photos
      ? author.photos.map((item) => {
          return getUrlImage(SIZE_IMAGE_LARGE, item);
        })
      : [],
  };
}
