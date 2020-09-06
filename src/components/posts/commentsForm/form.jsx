import React from "react"

/**
 * components/posts/commentsForm/form
 */
export default ({
  slug,
  post,
  message,
  name,
  email,
  url,
  handleChange,
  submitForm,
}) => {
  return (
    <form className="tw-flex tw-flex-col" onSubmit={submitForm}>
      <input name="slug" type="hidden" value={slug} />
      <input name="post" type="hidden" value={post} />
      <textarea
        name="message"
        placeholder="Comment"
        className="tw-w-full tw-p-50 f-base tw-mb-50 m-forms__input tw-rounded-4px t-animate is-required m-base-c-border"
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
          className="tw-flex-grow tw-p-50 f-base tw-mr-50 tw-rounded-4px t-animate m-forms__input is-required tw-min-w-0 m-base-c-border"
          value={name.value}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="tw-flex-grow tw-p-50 f-base tw-rounded-4px t-animate m-base-c-border tw-min-w-0"
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          value={email.value}
          onChange={handleChange}
        />
      </div>
      <input
        name="url"
        type="text"
        placeholder="Website"
        className="tw-p-50 f-base tw-rounded-4px t-animate m-base-c-border tw-mb-50"
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
  )
}
