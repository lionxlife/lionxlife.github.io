import React, { useEffect } from "react"
import arrayShuffle from "../../../helpers/arrayShuffle"
import { COVERS } from "../../../helpers/constants"

const useCover = setCoverLoading => {
  return useEffect(() => {
    const randomCover = arrayShuffle(COVERS)[0]
    const imageUrl = randomCover.url
    const bgElement = document.querySelector(".t-lazy")
    let preloaderImg = document.createElement("img")
    preloaderImg.src = imageUrl

    preloaderImg.addEventListener("load", event => {
      bgElement.style.backgroundImage = `url(${imageUrl})`
      bgElement.style.backgroundPosition = randomCover.position
      setCoverLoading(false)
      bgElement.classList.remove("t-opacity-0")
      preloaderImg = null
    })
  }, [setCoverLoading])
}

/**
 * covers/home/ImageCover
 */
export default ({ setCoverLoading }) => {
  useCover(setCoverLoading)
  return <div className="m-landing__cover t-lazy t-opacity-0"></div>
}
