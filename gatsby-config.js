module.exports = {
  siteMetadata: {
    title: `wordsto.me`,
    description: `Some hopefully useful words to me and you, for our one current life.`,
    author: `Lion`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-yaml`,
    // query all yaml with a simple query, from: https://www.gatsbyjs.com/plugins/gatsby-transformer-yaml/#configuration-options
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Yaml`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/comments`,
        name: `comments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wordsto.me`,
        short_name: `wordsto.me`,
        start_url: `/`,
        icon: `src/images/favicon-512.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
