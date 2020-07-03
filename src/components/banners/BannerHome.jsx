import React from "react"

export default () => {
  return (
    <section className="m-landing no-overflow t-relative">
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
        id="fn-cover"
        style={{ backgroundImage: "url(/images/cover-winter.jpg)" }}
      ></div>

      {/* <!-- mid block: heading --> */}
      <div className="m-landing__heading t-absolute has-text-centered has-text-white t-align--mid">
        <span
          className="m-landing__h1-home f-h1 cu-text-shadow"
          id="fn-hcover-heading"
        >
          <span className="char-hidden char-hash">#</span>
          <span className="char-hidden char-l">l</span>
          <span className="char-hidden char-o">o</span>
          <span className="char-hidden char-s">s</span>
          <span className="char-hidden char-t">t</span>
          <span className="char-hidden char-w">w</span>
          <span className="char-hidden char-o">o</span>
          <span className="char-hidden char-r">r</span>
          <span className="char-hidden char-d">d</span>
          <span className="char-hidden char-s">s</span>
        </span>
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
