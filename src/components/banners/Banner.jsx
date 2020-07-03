import React from "react"

export default () => {
  return (
    <section className="m-landing no-overflow t-relative" id="fn-post">
      {/* <!-- loading spinner --> */}
      <div className="m-landing__loading t-absolute t-align--mid-cen has-text-centered">
        <div className="is-inline-block">
          <i className="fas fa-circle-notch fa-spin fa-2x "></i>
        </div>
        <div>Loading</div>
      </div>

      {/* <!-- cover bg --> */}
      <div
        className="m-landing__cover"
        style={{ backgroundImage: "url(/images/cover-temp.jpg)" }}
      ></div>

      {/* <!-- mid block: heading --> */}
      <div className="m-landing__heading t-absolute t-align--mid has-text-centered has-text-white">
        <h1 className="m-landing__h1 f-h1 cu-text-shadow">Page title</h1>
        <div className="has-text-white m-landing__stats f-h4 is-inline-block">
          Year <strong>Year</strong> ~ <strong>[word count]</strong> words
        </div>
      </div>

      {/* <!-- bottom block --> */}
      <div className="section is-p0 m-landing__bot t-absolute">
        <div className="container">
          <div className="columns">
            <div className="column has-text-white">
              <i className="fas fa-caret-down fa-3x"></i>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- cover (scroll-down) btn --> */}
      <div
        className="m-landing__next t-absolute t-pointer"
        data-target="#anchor-content"
        id="fn-next"
      ></div>
    </section>
  )
}
