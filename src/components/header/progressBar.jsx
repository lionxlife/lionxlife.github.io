import React, { useEffect, useRef } from "react"

export default ({ isPost, refProgressBar, refs }) => {
  const refReadBar = useRef(null)
  useProgress({ refs, refReadBar, isPost })

  return (
    <div className="g-progress t-fixed" ref={refProgressBar}>
      <div className="g-progress__bar" ref={refReadBar}></div>
    </div>
  )
}

const useProgress = ({ refs, refReadBar, isPost }) => {
  return useEffect(() => {
    const calcPosition = () => {
      const contentHeight = refs.contentRef.current.clientHeight
      const position = document.documentElement.scrollTop
      const progress =
        position > contentHeight
          ? 100
          : Math.round((position / contentHeight) * 100)

      refReadBar.current.setAttribute("style", `width: ${progress}%`)
    }

    if (isPost) window.addEventListener("scroll", calcPosition)
    return () => window.removeEventListener("scroll", calcPosition)
  }, [])
}
