import React from "react"
import { calcBlogYear } from "./header/timer/useTimer"

export default () => {
  return (
    <footer className="section is-sml footer no-overflow">
      <div className="container">
        <div className="columns">
          {/* left: info */}
          <div className="column is-8 t-relative">
            {/* bg graphics */}
            <i className="fas fa-hourglass-end t-absolute footer__bg"></i>

            <div className="t-relative footer__info">
              <p className="f-h3 footer__quote override">
                “It’s not the years in your life that count. It’s the life in
                your years.”
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
