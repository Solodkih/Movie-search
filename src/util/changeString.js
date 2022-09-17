export default function stringWithSpaceToStringWithPlus(strWithSpase) {
  let strWithPlus = '';
  const array = strWithSpase.split(' ');

  for (let index = 0; index < array.length; index += 1) {
    if (index <= 0) {
      strWithPlus = strWithPlus.concat(array[index]);
    } else {
      strWithPlus = strWithPlus.concat('+', array[index]);
    }
  }
  return strWithPlus;
}
