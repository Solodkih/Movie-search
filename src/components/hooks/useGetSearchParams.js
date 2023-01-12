import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useGetSearchParams(setParams) {
  const [searchParams] = useSearchParams();
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
    const newParams = await getSearchParams();
    setParams(newParams);
  }, [searchParams]);
}
