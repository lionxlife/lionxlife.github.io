export default pageSlug => ({
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
