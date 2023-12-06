import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getUrlImage, SIZE_IMAGE_LARGE } from '../../util/image';
import { setShowImage } from '../../redux/modalWindowImageSlice';

export default function useGetHandlerShowImage(arrayImage) {
  const dispatch = useDispatch();

  const handlerShowImage = useCallback(() => {
    dispatch(
      setShowImage({
        show: true,
        currentImage: getUrlImage(SIZE_IMAGE_LARGE, arrayImage[0]),
        arrayImage: arrayImage.map((item) => {
          return getUrlImage(SIZE_IMAGE_LARGE, item);
        }),
      })
    );
  }, [arrayImage]);
  return handlerShowImage;
}
