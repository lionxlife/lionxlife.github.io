export default pageSlug => ({
  slug: {
    label: "fields[slug]",
    value: pageSlug.replaceAll("/", ""),
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
