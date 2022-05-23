import axios from 'axios';

const reguestDataGetBook = {
  method: 'get',
  url: 'https://openlibrary.org/search.json?subject=civilization&page=2',
};

export async function getBook() {
  try {
    const response = await axios(reguestDataGetBook);
    console.log(response);
  } catch (result) {
    throw result;
  }
}
