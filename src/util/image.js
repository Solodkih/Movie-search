const URL_IMAGE = 'https://covers.openlibrary.org/b/id/';

export const SIZE_IMAGE_SMALL = 'S';
export const SIZE_IMAGE_MEDIUM = 'M';
export const SIZE_IMAGE_LARGE = 'L';

export function getUrlImage(size, number) {
  if (!number) {
    return '';
  }
  return `${URL_IMAGE}${number}-${size}.jpg`;
}
