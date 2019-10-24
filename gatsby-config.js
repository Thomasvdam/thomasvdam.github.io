const DOMAIN = 'https://thomasvandam.com';

module.exports = {
    siteMetadata: {
        author: `@saDammie`,
        description: `Public diary.`,
        siteUrl: DOMAIN,
        title: `cat /etc/thoughts`,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/pages/markdown`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                            backgroundColor: "transparent",
                        },
                    },
                ],
            },
        },
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
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                serialize: ({ site, allSitePage }) => {
                    return allSitePage.edges.map(edge => {
                        const { path } = edge.node;
                        const sitemapConfig = {
                            changefreq: `weekly`,
                            priority: 0.7,
                            url: site.siteMetadata.siteUrl + path,
                        }

                        if (path === '/' || path.startsWith('/category')) {
                            sitemapConfig.changefreq = 'daily';
                            sitemapConfig.priority = 1;
                        } else if (path.startsWith('/post')) {
                            sitemapConfig.changefreq = 'monthly';
                            sitemapConfig.priority = 0.5;
                        }

                        return sitemapConfig;
                    });
                },
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
