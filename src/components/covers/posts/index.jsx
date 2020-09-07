import React, { useState } from "react"
import Loading from "../shared/loading"
import ImageCover from "./imageCover"
import Heading from "./heading"
import Bottom from "../shared/bottom"
import NextButton from "../shared/nextButton"

export default ({ postInfo }) => {
  const [coverLoading, setCoverLoading] = useState(true)

  return (
    <section className="m-landing no-overflow t-relative">
      <Loading />
      <ImageCover postInfo={postInfo} setCoverLoading={setCoverLoading} />
      <Heading postInfo={postInfo} coverLoading={coverLoading} />
      <Bottom />
      <NextButton coverLoading={coverLoading} />
    </section>
  )
}
