/**
 * helpers/convertWordsToTime
 * convert number of words to approx reading time
 * based off: https://help.medium.com/hc/en-us/articles/214991667-Read-time
 * TL;DR 265 Words Per Minute
 */
export default noOfWords => {
  return Math.round(noOfWords / 265)
}
