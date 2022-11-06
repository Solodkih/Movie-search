import { useEffect } from 'react';
import getBooksBySearch from '../../../util/axios/getBooksBySearch';
import { useSearchParams } from 'react-router-dom';

export default function useUpdateList(books, setBooks, page, setPage) {
  const [searchParams] = useSearchParams();
  let params = null;

  async function getSearchParams() {
    const params = {
      query: searchParams.get('query'),
      title: searchParams.get('title'),
      author: searchParams.get('author'),
      subject: searchParams.get('subject'),
      place: searchParams.get('place'),
      person: searchParams.get('person'),
      language: searchParams.get('language'),
      publisher: searchParams.get('publisher'),
    };
    return params;
  }

  useEffect(async () => {
    setPage(1);
    const params = await getSearchParams();
    const responsBooks = await getBooksBySearch(params, page);
    setBooks(responsBooks);
  }, [searchParams]);

  useEffect(async () => {
    const params = await getSearchParams();
    const responsBooks = await getBooksBySearch(params, page);
    setBooks([...books, ...responsBooks]);
  }, [page, params]);
}
