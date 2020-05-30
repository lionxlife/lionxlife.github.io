import { Link } from "gatsby"
import React, { Fragment } from "react"

const Header = ({ siteTitle }) => {
  return (
    <Fragment>
      <div className="g-progress t-fixed" id="fn-progress">
        <div className="g-progress__bar" id="fn-bar"></div>
      </div>

      <header className="header t-fixed" id="fn-header">
        <div className="section is-p0 t-relative">
          {/* header contents */}
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="header__container t-relative">
                  {/* logo #fn-logo is now .fn-logo */}
                  <Link
                    to="/"
                    className="header__logo is-block t-relative fn-logo"
                  >
                    <img
                      src="/images/logo-white.png"
                      alt="White LXL Logo"
                      className="header__logo--w is-block"
                    />
                    <img
                      src="/images/logo-black.png"
                      alt="Black LXL Logo"
                      className="header__logo--b is-block t-absolute"
                    />
                  </Link>

                  {/* timer */}
                  <div
                    className="header__timer t-absolute an-opacity-0"
                    id="fn-timer"
                  >
                    <i className="fas fa-circle-notch fa-spin"></i>
                    <span id="hour">0</span>:<span id="mins">00</span>
                    <span className="header__timer-desc">day</span>{" "}
                    <span id="day">0</span>,
                    <span className="header__timer-desc">year</span>{" "}
                    <span id="year">000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* header bg */}
          <div className="header__bg t-absolute"></div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
