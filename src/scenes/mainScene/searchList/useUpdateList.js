import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import getBooksBySearch from '../../../util/AJAX/getBooksBySearch';
import {
  addPropsToSearchObject,
  setMaxPageSearchObject,
} from '../../../redux/searchSlice';
import { addListBook } from '../../../redux/bookSlice';

export default function useUpdateList(page, maxPage, resetPage) {
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
    dispatch(addListBook(responsBooks.arrayWorks));
    const url = window.location.href;
    const arrayKeyWorks = responsBooks.arrayWorks.map((item) => {
      return item.key;
    });
    dispatch(addPropsToSearchObject({ url, arrayKeyWorks }));
    dispatch(setMaxPageSearchObject({ url, maxPage: responsBooks.maxPage }));
    resetPage();
  }, [searchParams]);

  useEffect(async () => {
    if (page <= 1) {
      return;
    }
    const params = await getSearchParams();
    const responsBooks = await getBooksBySearch(params, page);
    dispatch(addListBook(responsBooks.arrayWorks));
    const url = window.location.href;
    const arrayKeyWorks = responsBooks.arrayWorks.map((item) => {
      return item.key;
    });
    dispatch(addPropsToSearchObject({ url, arrayKeyWorks }));
  }, [page]);
}
