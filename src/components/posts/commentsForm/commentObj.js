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
  link: {
    label: "fields[link]",
    value: "",
  },
})
