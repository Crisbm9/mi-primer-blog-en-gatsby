/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Mi primer blog con Gatsby",
    description: "Es un blog divertido",
    siteUrl: `https://crisbm9.github.io`,
    iconUrl:`src/images/icon.png`

  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  "gatsby-plugin-mdx",
  ],
}
