export default async function getImageUrl(url) {
  try {
    const responseImage = await fetch(url);
    if (!responseImage.ok) return Promise.reject(responseImage);
    const imageBlob = await responseImage.blob();
    return URL.createObjectURL(imageBlob);
  } catch (e) {
    return Promise.reject(e);
  }
}
