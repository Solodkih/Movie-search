import axios from 'axios';

const urlMain = 'https://openlibrary.org';

const urlBook = '/works/OL45883W.json';

const reguestDataGetBook = {
  method: 'get',
  url: `${urlMain}${urlBook}`,
};

export async function getBook() {
  try {
    const responseBook = await axios(reguestDataGetBook);
    console.log(responseBook.data);

    const responseAutor = await axios({
      method: 'get',
      url: `${urlMain}${responseBook.data.authors[0].author.key}.json`,
    });
    console.log(responseAutor.data);

    return {
      title: responseBook.data.title,
      description: responseBook.data.description,
      images: responseBook.data.covers,
      authors: responseAutor.data.authors,
    };
  } catch (result) {
    throw result;
  }
}
