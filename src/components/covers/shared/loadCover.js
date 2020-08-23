/**
 * components/covers/shared/loadCover
 */
export default ({ imageUrl, bgElement, bgPosition, setCoverLoading }) => {
  let preloaderImg = document.createElement("img")
  preloaderImg.src = imageUrl

  return preloaderImg.addEventListener("load", event => {
    bgElement.style.backgroundImage = `url(${imageUrl})`
    bgElement.style.backgroundPosition = bgPosition
    setCoverLoading(false)
    bgElement.classList.remove("t-opacity-0")
    preloaderImg = null
  })
}
