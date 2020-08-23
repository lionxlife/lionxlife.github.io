import React, { useEffect } from "react"
import loadCover from "../shared/loadCover"

/**
 * components/covers/posts/imageCover.jsx
 */
export default ({ postInfo, setCoverLoading }) => {
  useCover({ setCoverLoading, postInfo })
  return <div className="m-landing__cover cu-lazy t-opacity-0"></div>
}

const useCover = ({ setCoverLoading, postInfo }) => {
  return useEffect(
    () =>
      loadCover({
        imageUrl: postInfo.image.childImageSharp.resize.src,
        bgElement: document.querySelector(".cu-lazy"),
        bgPosition: "center center",
        setCoverLoading,
      }),
    [setCoverLoading, postInfo]
  )
}
