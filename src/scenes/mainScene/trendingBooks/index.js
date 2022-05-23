import React, { useEffect } from 'react';
import { getBook } from '../../../requestData/axios/getBooks';

export default function TrendingBooks() {
  const response = null;

  useEffect(() => {
    async function get() {
      response = await getBook();
    }
    get();
  }, []);

  return <div>TrendingBooks</div>;
}
