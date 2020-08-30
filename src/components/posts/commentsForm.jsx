import React from "react"

/**
 * components/posts/comments.jsx
 */
export default ({ pageContext = {} }) => {
  return (
    <div>
      <h4 className="f-h4">Add a comment</h4>
      <form
        method="POST"
        action="https://staticman3.herokuapp.com/v3/entry/github/lionxlife/lionxlife.github.io/dev/comments"
      >
        <input
          name="options[slug]"
          type="hidden"
          value={pageContext.slug.replace("/", "")}
        />
        <input name="fields[post]" type="hidden" value={pageContext.slug} />
        <input name="fields[name]" type="text" placeholder="Name" required />
        <input name="fields[email]" type="email" placeholder="Email" />
        <input name="fields[url]" type="text" placeholder="Website" />
        <textarea name="fields[message]" placeholder="Comment" required />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  )
}
