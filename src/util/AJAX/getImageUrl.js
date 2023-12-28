export default async function getImageUrl(url) {
  const responseImage = await fetch(url, { method: 'get' });
  const imageBlob = await responseImage.blob();
  return URL.createObjectURL(imageBlob);
}
