import React from "react"
import useForm from "./useForm"
import FormStates from "./formStates"
import Form from "./form"

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
    resetForm,
  } = useForm(pageContext)

  return (
    <div>
      <h4 className="f-h4">Add a comment</h4>
      <FormContent
        {...{
          submitting,
          success,
          error,
          newComment,
          handleChange,
          submitForm,
          resetForm,
        }}
      />
    </div>
  )
}

const FormContent = ({
  submitting,
  success,
  error,
  newComment,
  handleChange,
  submitForm,
  resetForm,
}) => {
  const { slug, post, message, name, email, url } = newComment
  // console.log("test", newComment, name)

  if (submitting) return <FormStates isSubmitting />
  if (success) return <FormStates isSuccessful resetForm={resetForm} />
  if (error) return <FormStates isError resetForm={resetForm} />

  return (
    <Form
      {...{ slug, post, message, name, email, url, handleChange, submitForm }}
    />
  )
}
