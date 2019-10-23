/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const { createAllListing, createCategoryListings } = require('./gatsby-node/createListings');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: `post${slug}`,
        });
    }
}

exports.onCreateWebpackConfig = function ({ actions }) {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src')
            }
        }
    });
}

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/regularPost/regularPost.tsx`);
    const allMarkdownPages = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
                tags
            }
          }
        }
      }
    }
  `);

    if (allMarkdownPages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    allMarkdownPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
            },
        })
    });

    createAllListing(createPage, allMarkdownPages);
    createCategoryListings(createPage, allMarkdownPages);
}
