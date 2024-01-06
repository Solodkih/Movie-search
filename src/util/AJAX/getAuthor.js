const urlMain = new URL('https://openlibrary.org');

export async function getAuthor(urlAuthor) {
  try {
    const newUrl = new URL(`${urlAuthor}.json`, urlMain);
    const responseAuthor = await fetch(newUrl, {
      method: 'get',
    });
    if (!responseAuthor.ok) return Promise.reject(responseAuthor);
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
      photos: author.photos || [],
    };
  } catch (e) {
    return Promise.reject(e);
  }
}

