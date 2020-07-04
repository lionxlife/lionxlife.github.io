import React, { useState } from "react"
import ImageCover from "./ImageCover"
import Loading from "./Loading"
import NextButton from "./NextButton"
import Bottom from "./Bottom"
import Heading from "./heading/Heading"

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
