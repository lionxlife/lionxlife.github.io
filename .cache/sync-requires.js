const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/pages/index.js"))),
  "component---src-pages-page-js": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/pages/page.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/pages/tags.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/pages/using-typescript.tsx"))),
  "component---src-templates-blog-post-jsx": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/templates/blogPost.jsx"))),
  "component---src-templates-tags-jsx": hot(preferDefault(require("/home/tony/Repos/me-lionxlife-gatsby/src/templates/tags.jsx")))
}

