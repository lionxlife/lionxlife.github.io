/**
 * arrayShuffle
 * in: array
 * out: shuffled array
 *
 * https://stackoverflow.com/a/46545530/512353
 */
export default unshuffled => {
  return unshuffled
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
}
