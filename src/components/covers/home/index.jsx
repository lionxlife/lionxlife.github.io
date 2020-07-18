import React, { useState } from "react"
import ImageCover from "./imageCover"
import Loading from "./loading"
import NextButton from "./nextButton"
import Bottom from "./bottom"
import Heading from "./heading"

export default () => {
  const [coverLoading, setCoverLoading] = useState(true)

  return (
    <section className="m-landing no-overflow t-relative">
      <Loading />
      <ImageCover setCoverLoading={setCoverLoading} />
      <Heading coverLoading={coverLoading} />
      <Bottom />
      <NextButton />
    </section>
  )
}
