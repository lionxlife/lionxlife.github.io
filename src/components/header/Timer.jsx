import React from "react"

export default () => {
  return (
    <div className="header__timer t-absolute an-opacity-0" id="fn-timer">
      <i className="fas fa-circle-notch fa-spin"></i>
      <span id="hour">0</span>:<span id="mins">00</span>
      <span className="header__timer-desc">day</span> <span id="day">0</span>,
      <span className="header__timer-desc">year</span>{" "}
      <span id="year">000</span>
    </div>
  )
}
