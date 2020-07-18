import { useState, useEffect } from "react"
import moment from "moment"
import makeNumberTwoDigits from "../../../helpers/makeNumberTwoDigits"

/**
 * diff time in secs now from 1.5.2017
 * months is 0 based, hence May is 4
 */
const diffTimeInSecs = () => moment().diff(moment([2017, 4, 1]), "seconds")
const diffTimeInSecsToday = () =>
  moment().diff(moment().startOf("day"), "seconds")
const realSecToBlogDayNumber = 0.004224537037037037

/**
 * divide 60 = minutes
 * divide 60 = hours
 * divide 24 = days
 */
export const calcBlogYear = () => {
  return Math.floor(diffTimeInSecs() / 60 / 60 / 24)
}

export const calcBlogDay = () => {
  return Math.floor(diffTimeInSecsToday() * realSecToBlogDayNumber)
}

/**
 * % 1 = gets decimal
 * * 24 = becomes blog hours.minutes (ie: 21.5347222...)
 */
const calcBlogHourMins = () => {
  return ((diffTimeInSecsToday() * realSecToBlogDayNumber) % 1) * 24
}

/**
 * useTimer
 * init date: 1 May 2017, arrive KR
 *
 * 1 real day = 1 blog year
 * 24 real hours = 365 blog days; 1h = 15.21bd, 3.95m = 1bd
 * blog hours & mins = 24 x 60 mins = 1440 mins every ~4 real mins
 *
 * instead of doings maths per interval to get above times
 * we can just per interval convert current time to blog time, simpler
 * interval, try 500ms
 *
 * thus, every 500ms, do:
 * year: diff current time to start of 1.5.17 to get no. of days (round up)
 *
 * diff current time to start of today, get no. of sec
 * 365 / (24 * 60 * 60) = 0.004224537037037037 [b] = each sec diff is 0.0042..bd
 * ie: diff in secs * [b] = 96.1821; that's 96 bd and 0.1821 [c] blog hour-mins
 *
 * day: 96
 * hour-mins: 0.1821.. * (24 * 60) / 60 = 4.3695 = 4:22:17
 */
export default () => {
  const [blogYear, setBlogYear] = useState(null)
  const [blogDay, setBlogDay] = useState(null)
  const [blogHourMins, setBlogHourMins] = useState(null)

  useEffect(() => {
    const updateTimer = window.setInterval(() => {
      // console.log("useTimer executed", calcBlogYear())
      setBlogYear(calcBlogYear())
      setBlogDay(calcBlogDay())
      setBlogHourMins(calcBlogHourMins())
    }, 1000)

    return () => clearInterval(updateTimer)
  }, [setBlogYear, setBlogDay, setBlogHourMins])
  // console.log("useTimer", blogHourMins)

  return {
    blogYear,
    blogDay,
    blogHourMins: {
      blogHours: Math.floor(blogHourMins),
      blogMins: makeNumberTwoDigits(Math.floor((blogHourMins % 1) * 60)),
    },
  }
}
