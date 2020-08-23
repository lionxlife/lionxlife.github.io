import React, { useEffect } from "react"
import { COVERS } from "../../../helpers/constants"
import { calcBlogDay } from "../../header/timer/useTimer"
import loadCover from "../shared/loadCover"

/**
 * covers/home/ImageCover
 */
export default ({ setCoverLoading }) => {
  useCover(setCoverLoading)
  return <div className="m-landing__cover cu-lazy t-opacity-0"></div>
}

const useCover = setCoverLoading =>
  useEffect(() => {
    const seasonCover = COVERS.find(season => season.label === whichCover())

    loadCover({
      imageUrl: seasonCover.url,
      bgElement: document.querySelector(".cu-lazy"),
      bgPosition: seasonCover.position,
      setCoverLoading,
    })
  }, [setCoverLoading])

const whichCover = () => {
  const currentDay = calcBlogDay()

  switch (true) {
    case currentDay < 60: // winter (jan, feb)
    case currentDay > 334 && currentDay < 366: // winter (dec)
      return "winter"
    case currentDay > 59 && currentDay < 152: // spring (mar, april, may)
      return "spring"
    case currentDay > 151 && currentDay < 244: // summer (june, july, aug)
      return "summer"
    case currentDay > 243 && currentDay < 335: // autumn (sep, oct, nov)
      return "autumn"
  }
}
