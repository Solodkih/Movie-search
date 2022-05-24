import axios from 'axios';

const urlListBook =
  'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json';

const urlListBooks =
  'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579';

const reguestDataGetBooks = {
  method: 'get',
  url: urlListBoks,
};

export async function getBooks() {
  try {
    const response = await axios(reguestDataGetBooks);
    console.log(response);
  } catch (result) {
    console.log(result);
    throw result;
  }
}
