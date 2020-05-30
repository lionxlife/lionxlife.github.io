import React, { Fragment } from "react"
import Logo from "./Logo"
import Timer from "./Timer"
import ProgressBar from "./ProgressBar"

const Header = ({ siteTitle }) => {
  return (
    <Fragment>
      <ProgressBar />

      <header className="header t-fixed" id="fn-header">
        <div className="section is-p0 t-relative">
          {/* header contents */}
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="header__container t-relative">
                  <Logo />

                  <Timer />
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
