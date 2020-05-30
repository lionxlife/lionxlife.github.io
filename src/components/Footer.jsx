import React from "react"

export default () => {
  return (
    <footer class="section is-sml footer no-overflow">
      <div class="container">
        <div class="columns">
          {/* left: info */}
          <div class="column is-8 t-relative">
            {/* bg graphics */}
            <i class="fas fa-hourglass-end t-absolute footer__bg"></i>

            <div class="t-relative footer__info">
              <p class="f-h3 footer__quote override">
                “It’s not the years in your life that count. It’s the life in
                your years.”
              </p>
              <p>
                <a class="footer__twitter" title="later ;)">
                  <i class="fab fa-twitter"></i>
                </a>{" "}
                <strong>Lion X Life</strong> / Year{" "}
                <span id="fn-footer-year">000</span>
              </p>
            </div>
          </div>

          {/* right: social media (future) */}
        </div>
      </div>
    </footer>
  )
}
