import React from "react"

export default ({ postContent, contentRef }) => {
  return (
    <section className="section is-sml is-p0--bot" ref={contentRef}>
      <div className="container">
        <div className="columns">
          <div
            className="column is-8 is-offset-2 m-writing override"
            id="anchor-content"
          >
            <div dangerouslySetInnerHTML={{ __html: postContent }} />
          </div>
        </div>
      </div>
    </section>
  )
}
