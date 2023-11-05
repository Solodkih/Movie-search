export const workFromGetWorkObjects = (objectAJAX) => {
  return {
    download: true,
    key: objectAJAX.key,
    subjectTimes: objectAJAX.subject_times ?? [],
    subjectPlaces: objectAJAX.subject_places ?? [],
    subjectPeople: objectAJAX.subject_people ?? [],
    subjects: objectAJAX.subjects ?? [],
    title: objectAJAX.title,
    firstPublishDate: objectAJAX.first_publish_date,
    authors: objectAJAX.authors.map((itemAuthors) => {
      return itemAuthors.author.key;
    }),
    authorsName: objectAJAX.author_name && '',
    description: objectAJAX.description?.value ?? objectAJAX.description ?? '',
    arrayUrlImage:
      objectAJAX.covers?.map((itemUrl) => {
        return `https://covers.openlibrary.org/b/id/${itemUrl}-L.jpg`;
      }) ?? [],
  };
};

export const workFromSearchObjects = (objectAJAX) => {
  return {
    download: false,
    key: objectAJAX.key,
    subjectTimes: objectAJAX.subject_times ?? [],
    subjectPlaces: objectAJAX.subject_places ?? [],
    subjectPeople: objectAJAX.subject_people ?? [],
    subjects: objectAJAX.subjects ?? [],
    title: objectAJAX.title,
    firstPublishDate: objectAJAX.first_publish_date || objectAJAX.first_publish_year,
    authors: objectAJAX.author_key.map((key) => {
      return `/authors/${key}`;
    }),
    authorsName: objectAJAX.author_name && '',
    description: objectAJAX.description?.value ?? objectAJAX.description ?? '',
    arrayUrlImage:
      (objectAJAX.cover_i && [
        `https://covers.openlibrary.org/b/id/${objectAJAX.cover_i}-L.jpg`,
      ]) ||
      [],
  };
};

export const workFromSubjectObjects = (objectAJAX) => {
  return {
    download: false,
    key: objectAJAX.key,
    subjectTimes: objectAJAX.subject_times ?? [],
    subjectPlaces: objectAJAX.subject_places ?? [],
    subjectPeople: objectAJAX.subject_people ?? [],
    subjects: objectAJAX.subjects ?? objectAJAX.subject ?? [],
    title: objectAJAX.title,
    firstPublishDate: objectAJAX.first_publish_date || objectAJAX.first_publish_year,
    authors: objectAJAX.authors.map((item) => {
      return `/authors/${item.key}`;
    }),
    authorsName: objectAJAX.authors.map((item) => {
      return item.name;
    }),
    description: objectAJAX.description?.value ?? objectAJAX.description ?? '',
    arrayUrlImage:
      (objectAJAX.cover_i && [
        `https://covers.openlibrary.org/b/id/${objectAJAX.cover_i}-L.jpg`,
      ]) ||
      (objectAJAX.cover_id && [
        `https://covers.openlibrary.org/b/id/${objectAJAX.cover_id}-L.jpg`,
      ]) ||
      [],
  };
};
