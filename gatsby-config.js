require("dotenv").config()

const sheetCredentials = {
  client_email: process.env.GS_CLIENT_EMAIL || ``,
  private_key: process.env.GS_PRIVATE_KEY.replace(/\\n/g, '\n') || ``,
}

module.exports = {
  siteMetadata: {
    title: `Yogi Library`,
    description: `A video library for yoga lovers`,
    author: `Céline Cholé`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `yogi-library`,
        short_name: `Yogi Library`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/yogi-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: "13IimtmNvcrVqcvz8C2y-oxrBNRRvgityF1D9r70es1E",
        worksheetTitle: "Master",
        credentials: sheetCredentials,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
