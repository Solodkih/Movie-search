import { selectAuthor, fetchAuthor } from '../../../redux/authorSlice';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setShowImage } from '../../../redux/modalWindowImageSlice';
import React, { useEffect } from 'react';
import { fetchArrayImages } from '../../../redux/imageSlice';
import { getUrlImage, SIZE_IMAGE_LARGE } from '../../../util/image';
import  useGetInternalUrlImage from '../../../components/hooks/useGetInternalUrlImage';

export default function AuthorHOC(Component) {
  return function (props) {
    const { authorId } = useParams();
    const dispatch = useDispatch();
    const author = useSelector((state) => {
      return selectAuthor(state, `/authors/${authorId}`);
    });

    const urlImage = useGetInternalUrlImage(
      getUrlImage(SIZE_IMAGE_LARGE, author.photos[0])
    );

    const download =
      useSelector((state) => {
        return state.author.statusDownloadAuthor;
      }) || false;

    useEffect(() => {
      if (author.key === `/authors/${authorId}`) return;
      dispatch(fetchAuthor(`/authors/${authorId}`));
    }, []);

    const handlerShowImage = () => {
      dispatch(
        setShowImage({
          show: true,
          currentImage: getUrlImage(SIZE_IMAGE_LARGE, author.photos[0]),
          arrayImage: author.photos.map((item) => {
            return getUrlImage(SIZE_IMAGE_LARGE, item);
          }),
        })
      );
    };

    useEffect(() => {
      dispatch(
        fetchArrayImages(
          author.photos.map((item) => {
            return getUrlImage(SIZE_IMAGE_LARGE, item);
          })
        )
      );
    }, [author]);

    return (
      <Component
        author={author}
        download={download}
        handlerShowImage={handlerShowImage}
        urlImage={urlImage}
        {...props}
      />
    );
  };
}
