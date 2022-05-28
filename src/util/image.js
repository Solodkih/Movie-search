const URL_IMAGE = 'https://covers.openlibrary.org/b/id/';

export const SIZE_IMAGE_SAMALL = 'S';
export const SIZE_IMAGE_MEDIUM = 'M';
export const SIZE_IMAGE_LARGE = 'L';

export function getUrlImage({ size, number }) {
  return `${URL_IMAGE}${number}-${size}.jpg`;
}
