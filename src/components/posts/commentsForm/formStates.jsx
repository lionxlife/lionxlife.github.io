import React, { Fragment } from "react"

/**
 * components/posts/commentsForm/formStates.jsx
 */
export default ({ isSubmitting, isSuccessful, isError, resetForm }) => {
  return (
    <div className="m-base-c-border t-animate tw-flex tw-rounded-4px tw-p-50 tw-pl-100 tw-items-center tw-leading-tight">
      {isSubmitting && (
        <Content
          icons={[
            "fas fa-flask b-grey-light tw-animate-pulse",
            "fas fa-cat b-grey-light tw-animate-bounce",
            "fas fa-search b-grey-light tw-animate-spin",
          ]}
          text={
            <div>
              Our lab cats are inspecting your comment for submission. If it's
              successsful, we'll let you know here. Carry on for now{" "}
              <i class="far fa-smile-wink"></i>
            </div>
          }
        />
      )}
      {isSuccessful && (
        <Content
          icons={["fas fa-check-circle tw-animate-bounce b-green"]}
          text={
            <div>
              Your comment has been submitted! It will show up here after Lion
              boss approves it! Carry on or{" "}
              <span onClick={resetForm} className="b-link">
                write another comment
              </span>
              .
            </div>
          }
        />
      )}
      {isError && (
        <Content
          icons={["fas fa-skull tw-animate-spin b-primary"]}
          text={
            <div>
              Oops... something went wrong. Quick, tell Lion boss! Or{" "}
              <span onClick={resetForm} className="b-link">
                go back and try again
              </span>
              .
            </div>
          }
        />
      )}
    </div>
  )
}

const Content = ({ icons, text }) => {
  return (
    <Fragment>
      <div className="tw-whitespace-no-wrap tw-text-200">
        {icons.map((icon, i) => (
          <i key={icon + i} class={`tw-mr-50 ${icon}`}></i>
        ))}
      </div>
      {text}
    </Fragment>
  )
}
