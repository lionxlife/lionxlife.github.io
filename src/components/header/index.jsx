import React, { Fragment } from "react"
import Logo from "./logo"
import Timer from "./timer"
import ProgressBar from "./progressBar"
import useScrollFunctionality from "./useScrollFunctionality"

const Header = ({ isPost, refs, siteTitle }) => {
  const { refHeader, refProgressBar } = useScrollFunctionality()

  return (
    <Fragment>
      <ProgressBar
        isPost={isPost}
        refProgressBar={refProgressBar}
        refs={refs}
      />

      <header className="header t-fixed" ref={refHeader}>
        <div className="section is-p0 t-relative">
          {/* header contents */}
          <div className="container is-fluid">
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
