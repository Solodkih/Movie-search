import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import getBooksBySearch from '../../../util/AJAX/getBooksBySearch';
import { addPropsToSearchObject } from '../../../redux/searchSlice';

export default function useUpdateList(books, setBooks, page, resetPage) {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  async function getSearchParams() {
    return {
      query: searchParams.get('query'),
      title: searchParams.get('title'),
      author: searchParams.get('author'),
      subject: searchParams.get('subject'),
      place: searchParams.get('place'),
      person: searchParams.get('person'),
      language: searchParams.get('language'),
      publisher: searchParams.get('publisher'),
    };
  }

  useEffect(async () => {
    const params = await getSearchParams();
    const responsBooks = await getBooksBySearch(params, 1);
    const url = window.location.href;
    const arrayKeyWorks = responsBooks.map((item) => {
      return item.key;
    });
    dispatch(addPropsToSearchObject({ url, arrayKeyWorks }));
    resetPage();
    setBooks(responsBooks);
  }, [searchParams]);

  useEffect(async () => {
    if (page <= 1) {
      return;
    }
    console.log('[page]');
    const params = await getSearchParams();
    const responsBooks = await getBooksBySearch(params, page);
    const url = window.location.href;
    const arrayKeyWorks = responsBooks.map((item) => {
      return item.key;
    });
    dispatch(addPropsToSearchObject({ url, arrayKeyWorks }));
    setBooks([...books, ...responsBooks]);
  }, [page]);
}
