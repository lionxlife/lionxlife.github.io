import React from "react"
import useTimer from "./useTimer"
import classes from "../../../helpers/classesHandler"

/**
 * header/timer/Timer
 */
export default () => {
  const { blogYear, blogDay, blogHourMins } = useTimer()
  const { blogHours, blogMins } = blogHourMins

  return (
    <div
      className={classes("header__timer t-absolute", {
        "t-opacity-0": !blogYear,
      })}
      id="fn-timer"
    >
      <i className="fas fa-circle-notch fa-spin"></i>{" "}
      <span id="hour">{blogHours}</span>:<span id="mins">{blogMins}</span>{" "}
      <span className="header__timer-desc">day</span>{" "}
      <span id="day">{blogDay}</span>,{" "}
      <span className="header__timer-desc">year</span>{" "}
      <span id="year">{blogYear}</span>
    </div>
  )
}
