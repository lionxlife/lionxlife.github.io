import React, { useState } from "react"
import ImageCover from "./imageCover"
import Loading from "../shared/loading"
import NextButton from "../shared/nextButton"
import Bottom from "../shared/bottom"
import Heading from "./heading"

export default () => {
  const [coverLoading, setCoverLoading] = useState(true)

  return (
    <section className="m-landing no-overflow t-relative">
      <Loading />
      <ImageCover setCoverLoading={setCoverLoading} />
      <Heading coverLoading={coverLoading} />
      <Bottom />
      <NextButton coverLoading={coverLoading} />
    </section>
  )
}
