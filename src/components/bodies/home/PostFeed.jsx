import React from "react"
// import { Link } from "gatsby"

/**
 * <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
 * https://www.gatsbyjs.org/docs/gatsby-link/
 */
const MainPostBlock = () => {
  return (
    <div className="column is-12">
      <a
        href="<%= url_for(post.path) %>"
        target="_self"
        className="m-pfeed__post is-block t-relative no-overflow"
      >
        <div
          className="m-pfeed__bg t-absolute"
          style={{ backgroundImage: "url(/images/cover-temp.jpg)" }}
        ></div>
        <div className="t-absolute m-pfeed__info">
          <h2 className="f-h2 has-text-white cu-text-shadow">post title</h2>
          <span className="has-text-white m-pfeed__stats">
            Year <strong>post year</strong> ~ <strong>[word count]</strong>{" "}
            words
          </span>
          <div className="m-pfeed__read no-overflow">
            <div className="m-pfeed__read-spacer">
              <strong>
                Read{" "}
                <i className="fas fa-long-arrow-alt-right m-pfeed__arrow"></i>
              </strong>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

// const PostBlock = () => {
//   return (
//     <div className="column is-6">
//       <a
//         href="<%= url_for(post.path) %>"
//         target="_self"
//         className="m-pfeed__post m-pfeed__post--sec is-block t-relative no-overflow"
//       >
//         <div
//           className="m-pfeed__bg t-absolute"
//           style={{ backgroundImage: "url(/images/cover-temp.jpg)" }}
//         ></div>
//         <div className="t-absolute m-pfeed__info m-pfeed__info--sec">
//           <h2 className="f-h3 has-text-white cu-text-shadow">post title</h2>
//           <span className="has-text-white m-pfeed__stats">
//             Year <strong>post year</strong> ~ <strong>[word count]</strong>{" "}
//             words
//           </span>
//           <div className="m-pfeed__read no-overflow">
//             <div className="m-pfeed__read-spacer">
//               <strong>
//                 Read{" "}
//                 <i className="fas fa-long-arrow-alt-right m-pfeed__arrow"></i>
//               </strong>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   )
// }

const PostPlaceHolderBlock = () => {
  return (
    <div className="column is-6">
      <a
        target="_self"
        href="test"
        className="m-pfeed__post m-pfeed__post--sec is-block t-relative no-overflow t-cursor-def"
      >
        <div
          className="m-pfeed__bg t-absolute"
          style={{ backgroundImage: "url(/images/post-placeholder.jpg)" }}
        ></div>
        <div className="t-absolute m-pfeed__info m-pfeed__info--sec">
          <h2 className="f-h3 has-text-white cu-text-shadow">#null</h2>
          <span className="has-text-white m-pfeed__stats">
            ...words in transit
          </span>
        </div>
      </a>
    </div>
  )
}

export default () => {
  return (
    <section className="section is-p0--top is-sml">
      <div className="container">
        <div className="columns is-multiline">
          <MainPostBlock />
          <PostPlaceHolderBlock />
          <PostPlaceHolderBlock />
        </div>
      </div>
    </section>
  )
}
