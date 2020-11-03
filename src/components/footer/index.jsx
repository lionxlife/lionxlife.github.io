import React from "react"
import { calcBlogYear } from "../header/timer/useTimer"
import QUOTES from "./quotes"
import arrayShuffle from "../../helpers/arrayShuffle"

export default () => {
  return (
    <footer className="section is-p0 footer no-overflow">
      <div className="container is-fluid">
        <div className="columns">
          {/* left: info */}
          <div className="column t-relative">
            {/* bg graphics */}
            <i className="fas fa-hourglass-end t-absolute footer__bg"></i>

            <div className="t-relative footer__info">
              <p className="f-h3 footer__quote override">
                “{arrayShuffle(QUOTES)[0]}”
              </p>
              <p>
                {/* <a href="#" className="footer__twitter" title="later ;)">
                  <i className="fab fa-twitter"></i>
                </a>{" "} */}
                <strong>Lion X Life</strong> / Year{" "}
                <span id="fn-footer-year">{calcBlogYear()}</span>
              </p>
            </div>
          </div>

          {/* right: social media (future) */}
        </div>
      </div>
    </footer>
  )
}
