export default async function getImageUrl(url) {
  try {
    const responseImage = await fetch(url);
    if (!responseImage.ok) throw new Error(responseImage);
    const imageBlob = await responseImage.blob();
    return URL.createObjectURL(imageBlob);
  } catch (e) {
    throw new Error(e);
  }
}
