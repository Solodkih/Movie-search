export default function stringWithSpaceToStringWithPlus(strWithSpase) {
  let strWithPlus = '';
  let array = strWithSpase.split(' ');

  for (let index = 0; index < array.length; index++) {
    if (index <= 0) {
      strWithPlus = strWithPlus.concat(array[index]);
    } else {
      strWithPlus = strWithPlus.concat('+', array[index]);
    }
  }
  return strWithPlus;
}
