import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import { fetchSearchListWork } from '../../../redux/searchSlice';

export default function useUpdateList(page, books, resetPage) {
  const [searchParams] = useSearchParams();
  const isFirstRender = useRef(true);

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
    if (Array.isArray(books) && books.length === 0) {
      const params = await getSearchParams();
      const url = window.location.href;
      dispatch(fetchSearchListWork({ params, page: 1, url }));
      resetPage();
    }
  }, [searchParams]);

  useEffect(async () => {
    if (!isFirstRender.current && page > 1) {
      const params = await getSearchParams();
      const url = window.location.href;
      dispatch(fetchSearchListWork({ params, page, url }));
    }
    isFirstRender.current = false;
    return () => {
      isFirstRender.current = true;
    };
  }, [page]);
}
