/**
 * components/posts/commentsForm/processData
 */
export default newComment => {
  const formBody = Object.keys(newComment)
    .map(
      key =>
        encodeURIComponent(newComment[key].label) +
        "=" +
        encodeURIComponent(newComment[key].value)
    )
    .join("&")
  // console.log("form", newComment, formBody)
  return formBody
}
