import { graphql } from 'gatsby';
import React from 'react';

import ListingTemplate from './listing';

const CategoryListingTemplate = ({ data, pageContext, path }) => (
    <ListingTemplate data={data} pageContext={pageContext} path={path} linkTo={'/category/all'} />
);

export default CategoryListingTemplate;

export const pageQuery = graphql`
query categoryPostsQuery($skip: Int!, $limit: Int!, $category: String!) {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: $limit
    skip: $skip
    filter: { frontmatter: { tags: { in: [$category] } } }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          subject
        }
      }
    }
  }
}
`;
