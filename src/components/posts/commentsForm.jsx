import React, { useState } from "react"
import site from "../../../config/site"

const commentObj = pageSlug => ({
  slug: {
    label: "options[slug]",
    value: pageSlug.replace("/", ""),
  },
  post: {
    label: "fields[post]",
    value: pageSlug,
  },
  message: {
    label: "fields[message]",
    value: "",
  },
  name: {
    label: "fields[name]",
    value: "",
  },
  email: {
    label: "fields[email]",
    value: "",
  },
  url: {
    label: "fields[url]",
    value: "",
  },
})

const processData = newComment => {
  // const formdata = new FormData(event.target)
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

const useForm = pageContext => {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [newComment, setNewComment] = useState(commentObj(pageContext.slug))

  const handleChange = event => {
    const { name: inputName, value } = event.target

    setNewComment(prevCommment => ({
      ...prevCommment,
      [inputName]: {
        ...prevCommment[inputName],
        value,
      },
    }))
  }

  const submitForm = async event => {
    event.preventDefault()

    // validation
    if (!newComment.name.value.length || !newComment.message.value.length) {
      return alert("Please fill in required fields, thanks!")
    }

    // send data & handling
    const response = await fetch(site.staticmanApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: processData(newComment), // process data
    })

    if (response.ok === true) {
      console.log("success!", response)
    } else {
      console.log("failed :(", response)
    }
  }

  return {
    submitting,
    success,
    error,
    newComment,
    handleChange,
    submitForm,
  }
}

/**
 * components/posts/comments.jsx
 */
export default ({ pageContext = {} }) => {
  const {
    submitting,
    success,
    error,
    newComment,
    handleChange,
    submitForm,
  } = useForm(pageContext)
  const { slug, post, message, name, email, url } = newComment
  console.log("test", newComment, name)

  return (
    <div>
      <h4 className="f-h4">Add a comment</h4>
      <form className="tw-flex tw-flex-col" onSubmit={submitForm}>
        <input name="slug" type="hidden" value={slug} />
        <input name="post" type="hidden" value={post} />
        <textarea
          name="message"
          placeholder="Comment"
          className="tw-w-full tw-p-50 f-base tw-mb-50 m-forms__input tw-rounded-4px t-animate is-required"
          style={{ height: "6rem" }}
          value={message.value}
          onChange={handleChange}
          required
        />
        <div className="tw-flex tw-mb-50">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="tw-flex-grow tw-p-50 f-base tw-mr-50 tw-rounded-4px t-animate m-forms__input is-required tw-min-w-0"
            value={name.value}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="tw-flex-grow tw-p-50 f-base tw-rounded-4px t-animate m-forms__input tw-min-w-0"
            value={email.value}
            onChange={handleChange}
          />
        </div>
        <input
          name="url"
          type="text"
          placeholder="Website"
          className="tw-p-50 f-base tw-rounded-4px t-animate m-forms__input tw-mb-50"
          value={url.value}
          onChange={handleChange}
        />
        <div>
          <button
            type="submit"
            className="tw-inline-block f-base tw-rounded-4px tw-border-0 tw-py-25 tw-px-100 t-animate tw-cursor-pointer m-forms__submit"
          >
            Submit Comment
          </button>
        </div>
      </form>
    </div>
  )
}
