/**
 * makeNumberTwoDigits
 * in: number of 1-2 digits
 * out: number with 2 digits (ie: 05)
 *
 * https://stackoverflow.com/a/61698841/512353
 */
export default number => {
  return `${Math.trunc(number / 10)}${Math.trunc(number % 10)}`
}
