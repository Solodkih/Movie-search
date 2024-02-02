import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImage } from '../../redux/imageSlice';

export default function useGetInternalUrlImage(externalUrl) {
  const internalUrl = useSelector((state) => {
    return state.image[externalUrl];
  });
  const dispatch = useDispatch();

  useEffect(async () => {
    if (internalUrl) return;
    if (!externalUrl) return;
    dispatch(fetchImage(externalUrl));
  }, [externalUrl]);
  return internalUrl;
}
