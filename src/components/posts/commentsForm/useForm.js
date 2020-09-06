import { useState } from "react"
import site from "../../../../config/site"
import processData from "./processData"
import commentObj from "./commentObj"

/**
 * components/posts/commentsForm/useForm
 */
export default pageContext => {
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
    setSubmitting(true)
    const response = await fetch(site.staticmanApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: processData(newComment), // process data
    })

    if (response.ok === true) {
      console.log("success!", response)
      setSuccess(true)
      setSubmitting(false)
    } else {
      console.log("failed :(", response)
      setError(true)
      setSubmitting(false)
    }
  }

  const resetForm = () => {
    setNewComment(commentObj(pageContext.slug))
    setSubmitting(false)
    setSuccess(false)
    setError(false)
  }

  return {
    submitting,
    success,
    error,
    newComment,
    handleChange,
    submitForm,
    resetForm,
  }
}
