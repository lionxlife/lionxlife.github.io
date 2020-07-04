import React, { useEffect } from "react"
import arrayShuffle from "../../../helpers/arrayShuffle"

const covers = [
  {
    label: "winter",
    url: "/images/cover-winter.jpg",
    position: "left center",
  },
  {
    label: "spring",
    url: "/images/cover-spring.jpg",
    position: "center center",
  },
  {
    label: "summer",
    url: "/images/cover-summer.jpg",
    position: "center center",
  },
  {
    label: "autumn",
    url: "/images/cover-autumn.jpg",
    position: "center center",
  },
]

const useCover = setCoverLoading => {
  return useEffect(() => {
    const randomCover = arrayShuffle(covers)[0]
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
  }, [])
}

/**
 * covers/home/ImageCover
 */
export default ({ setCoverLoading }) => {
  useCover(setCoverLoading)
  return <div className="m-landing__cover t-lazy t-opacity-0"></div>
}
