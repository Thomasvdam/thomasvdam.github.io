module.exports = {
  siteMetadata: {
    title: `cat /etc/thoughts`,
    description: `Public diary.`,
    author: `@saDammie`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
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
        name: `thomasvandam.com`,
        short_name: `thomasvandam.com`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#434343`,
        display: `minimal-ui`,
        icon: `src/images/batman-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
